//import 'package:auth_widget_builder/auth_widget_builder.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:magisterium_mobile_app/app/auth_widget.dart';
import 'package:magisterium_mobile_app/app/home/home_page.dart';
import 'package:magisterium_mobile_app/app/onboarding/onboarding_page.dart';
import 'package:magisterium_mobile_app/app/onboarding/onboarding_view_model.dart';
import 'package:magisterium_mobile_app/app/top_level_providers.dart';
import 'package:magisterium_mobile_app/app/sign_in/sign_in_page.dart';
import 'package:magisterium_mobile_app/routing/app_router.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:magisterium_mobile_app/services/shared_preferences_service.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  final sharedPreferences = await SharedPreferences.getInstance();
  runApp(ProviderScope(
    overrides: [
      sharedPreferencesServiceProvider.overrideWithValue(
        SharedPreferencesService(sharedPreferences),
      ),
    ],
    child: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final firebaseAuth = context.read(firebaseAuthProvider);
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.blue),
      debugShowCheckedModeBanner: false,
      home: AuthWidget(
        nonSignedInBuilder: (_) => Consumer(
          builder: (context, watch, _) {
            final didCompleteOnboarding =
                watch(onboardingViewModelProvider.state);
            return didCompleteOnboarding ? SignInPage() : OnboardingPage();
          },
        ),
        signedInBuilder: (_) => HomePage(),
      ),
      onGenerateRoute: (settings) =>
          AppRouter.onGenerateRoute(settings, firebaseAuth),
    );
  }
}