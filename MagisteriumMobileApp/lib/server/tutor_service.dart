import 'package:http/http.dart' as http;
import '../app/home/models/tutor.dart';
import 'dart:convert';

class TutorService {
  final String postsURL = 'magistrum-308411.et.r.appspot.com';
  final String routeURL = '/api/users/tutors';

  Future<dynamic> getTutors() async {
    var res = await http.get(Uri.https(postsURL, routeURL));

    if (res.statusCode == 200) {
      final dynamic body = json.decode(res.body);

      final dynamic tutors = body
          .map(
            (dynamic item) => Tutor.fromJson(item),
          )
          .toList();

      return tutors;
    } else {
      throw "Can't get tutors.";
    }
  }
}