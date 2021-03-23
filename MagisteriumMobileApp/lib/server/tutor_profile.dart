import 'package:http/http.dart' as http;
import '../app/home/models/profile.dart';
import 'dart:convert';

class TutorProfile {
  final String postsURL = 'magistrum-308411.et.r.appspot.com';
  final String routeURL = 'api/profile/handle/';
  final String handle;

  const TutorProfile({required this.handle});

  Future<dynamic> getProfiles() async {
    String apiRoute = '$routeURL$handle';
    var res = await http.get(Uri.https(postsURL, apiRoute));

    if (res.statusCode == 200) {
      final dynamic body = json.decode(res.body);

      final Profile profiles = Profile.fromJson(body);

      return profiles;
    } else {
      return; 
    }
  }
}