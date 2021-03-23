import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:starter_architecture_flutter_firebase/app/home/job_entries/job_entries_page.dart';
import 'package:starter_architecture_flutter_firebase/app/home/jobs/job_list_tile.dart';
import 'package:starter_architecture_flutter_firebase/app/home/jobs/list_items_builder.dart';
import 'package:starter_architecture_flutter_firebase/app/home/models/job.dart';
import 'package:starter_architecture_flutter_firebase/app/home/job_entries/job_entries_page.dart';
import 'package:alert_dialogs/alert_dialogs.dart';
import 'package:starter_architecture_flutter_firebase/app/top_level_providers.dart';
import 'package:starter_architecture_flutter_firebase/constants/strings.dart';
import 'package:pedantic/pedantic.dart';
import 'package:starter_architecture_flutter_firebase/services/firestore_database.dart';
import '../../../server/tutor_service.dart';
import '../../../server/tutor_profile.dart';
import 'food_item_page.dart';
import '../models/food_item.dart';
import 'package:starter_architecture_flutter_firebase/app/home/models/job.dart';
import '../../../app/home/models/tutor.dart';
import 'main_page.dart';
 

final jobsStreamProvider = StreamProvider.autoDispose<List<Job>>((ref) {
  final database = ref.watch(databaseProvider);
  return database.jobsStream();
});

// watch database
class BookPage extends ConsumerWidget {
  final TutorService tutorService = TutorService();

  Future<void> _delete(BuildContext context, Job job) async {
    try {
      final database = context.read<FirestoreDatabase>(databaseProvider);
      await database.deleteJob(job);
    } catch (e) {
      unawaited(showExceptionAlertDialog(
        context: context,
        title: 'Operation failed',
        exception: e,
      ));
    }
  }

  @override
  Widget build(BuildContext context, ScopedReader watch) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(Strings.book),
      ),
      body: FutureBuilder<dynamic> (
        future: tutorService.getTutors(),
        builder: (BuildContext context, AsyncSnapshot<dynamic> snapshot) { 
          if (snapshot.hasData) {
            List<dynamic> posts = snapshot.data as List<dynamic>;
            return ListView(
              padding: EdgeInsets.only(left: 15, top: 30, right: 15, bottom: 30), 
              children: posts
                  .map(
                    (dynamic post) => CardWidget(data: post, handle: post.email)
                  )
                  .toList(),
            );
          } else {
            return Center(child: CircularProgressIndicator());
          }
        }
      )
    );
  }
}


/// This is the stateless widget that the main application instantiates.
class CardWidget extends StatelessWidget {
  final dynamic data;
  String handle;
  CardWidget({Key? key, required this.data, required this.handle}) : super(key: key);


  @override
  Widget build(BuildContext context) {
    TutorProfile tutorProfile = TutorProfile(handle: handle);
    FoodItem profile = FoodItem(imageUrl: Strings.profilePic, itemName: data.name, estimatedTime: '2', rating: '3', price: '3');
    return FutureBuilder<dynamic> (
      future: tutorProfile.getProfiles(),
      builder: (BuildContext context, AsyncSnapshot<dynamic> snapshot) {
        if (snapshot.hasData) {
          Job job = Job(id: data.id, name: data.name, ratePerHour: 150);
          String subjects = '${snapshot.data.minor.join(', ')} (${snapshot.data.major[0]})';
          return Center(
            child: Card(
              clipBehavior: Clip.antiAlias,
                child: Column(
                  children: [
                    ListTile(
                      leading: Icon(Icons.account_circle),
                      title: Text(data.name),
                      subtitle: Text(
                        subjects,
                        style: TextStyle(color: Colors.black.withOpacity(0.6)),
                      ),
                    ),
                    ListTile(
                      visualDensity: VisualDensity(horizontal: 0, vertical: -4),
                      contentPadding: EdgeInsets.only(left: 15, right: 0),
                      leading: Icon(Icons.email),
                      title: Text(data.email),
                    ),
                    ListTile(
                      visualDensity: VisualDensity(horizontal: 0, vertical: -4), 
                      contentPadding: EdgeInsets.only(left: 15, right: 0),
                      leading: Icon(Icons.warning_rounded),
                      title: Text(snapshot.data.bio),
                    ),
                    ListTile(
                      visualDensity: VisualDensity(horizontal: 0, vertical: -4), 
                      contentPadding: EdgeInsets.only(left: 15, right: 0),
                      leading: Icon(Icons.calendar_today),
                      title: Text(snapshot.data.availability),
                    ),
                    ListTile(
                      visualDensity: VisualDensity(horizontal: 0, vertical: -4), 
                      contentPadding: EdgeInsets.only(left: 15, bottom: 30),
                      leading: Icon(Icons.book_rounded),
                      title: Text(snapshot.data.attainment),
                    ),
                    ButtonBar(
                      alignment: MainAxisAlignment.start,
                      children: [
                        FlatButton(
                          textColor: const Color(0xFF6200EE),
                          onPressed: () {
                            JobEntriesPage.show(context, job);
                          },
                          child: const Text('BOOK TUTOR'),
                        ),
                        FlatButton(
                          textColor: const Color(0xFF6200EE),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) => FoodItemPage(foodItem: profile, tutorProfile: snapshot.data)),
                            );
                          },
                          child: const Text('VIEW PROFILE'),
                        ),
                      ],
                    ),
                    Image.asset('assets/card-sample-image.jpg'),
                  ],
                ),
              ),
            );
        } else {
          return Center();
        }
      }
    );
  }
}

