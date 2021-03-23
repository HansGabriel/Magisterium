import 'package:equatable/equatable.dart';
import 'package:meta/meta.dart';

@immutable
class Tutor extends Equatable {
  const Tutor({required this.id, required this.name, required this.email});
  final String id;
  final String name;
  final String email;

  @override
  List<Object> get props => [id, name, email];

  @override
  bool get stringify => true;

  factory Tutor.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      throw StateError('missing data for tutorData');
    }
    final firstName = json['firstname'] as String;
    final lastName = json['lastname'] as String;
    final name = '$firstName $lastName';
    return Tutor(
      id: json['_id'] as String,
      name: name,
      email: json['email'] as String,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'email': email,
    };
  }
}
