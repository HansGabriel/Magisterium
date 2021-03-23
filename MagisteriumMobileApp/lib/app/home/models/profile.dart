import 'package:equatable/equatable.dart';
import 'package:meta/meta.dart';

@immutable
class Profile extends Equatable {
  const Profile({
    required this.major,
     required this.minor,
     required this.courses,
     required this.disabled,
     required this.handle,
     required this.type,
     required this.attainment,
     required this.bio,
     required this.availability,
  });
  final List<dynamic> major;
  final List<dynamic> minor;
  final List<dynamic> courses;
  final bool disabled;
  final String handle;
  final String type;
  final String attainment;
  final String bio;
  final String availability;

  @override
  List<Object> get props => [
    major, 
    minor,
    courses,
    disabled, 
    handle, 
    type, 
    attainment, 
    bio, 
    availability
  ];

  @override
  bool get stringify => true;

  factory Profile.fromJson(Map<String, dynamic> json) {
    if (json == null) {
      throw StateError('missing data for tutorData');
    }

    return Profile(
      major: json['major'] as List<dynamic>,
      minor: json['minor'] as List<dynamic>,
      courses: json['courses'] as List<dynamic>,
      disabled: json['disabled'] as bool, 
      handle: json['handle'] as String, 
      type: json['type'] as String, 
      attainment: json['attainment'] as String, 
      bio: json['bio'] as String, 
      availability: json['availability'] as String, 
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'major': major, 
      'minor': minor,
      'courses': courses, 
      'disabled': disabled, 
      'handle': handle, 
      'type': type, 
      'attainment': attainment, 
      'bio': bio, 
      'availability': availability
    };
  }
}
