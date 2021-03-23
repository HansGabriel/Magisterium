import 'package:flutter/material.dart';
import 'package:magisterium_mobile_app/app/home/account/account_page.dart';
import 'package:magisterium_mobile_app/app/home/cupertino_home_scaffold.dart';
import 'package:magisterium_mobile_app/app/home/entries/entries_page.dart';
import 'package:magisterium_mobile_app/app/home/jobs/jobs_page.dart';
import 'package:magisterium_mobile_app/app/home/jobs/book_page.dart';
import 'package:magisterium_mobile_app/app/home/tab_item.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TabItem _currentTab = TabItem.home;

  final Map<TabItem, GlobalKey<NavigatorState>> navigatorKeys = {
    TabItem.book: GlobalKey<NavigatorState>(),
    TabItem.home: GlobalKey<NavigatorState>(),
    TabItem.entries: GlobalKey<NavigatorState>(),
    TabItem.account: GlobalKey<NavigatorState>(),
  };

  Map<TabItem, WidgetBuilder> get widgetBuilders {
    return {
      TabItem.book: (_) => BookPage(),
      TabItem.home: (_) => JobsPage(),
      TabItem.account: (_) => AccountPage(),
      TabItem.entries: (_) => EntriesPage(),
    };
  }

  void _select(TabItem tabItem) {
    if (tabItem == _currentTab) {
      // pop to first route
      navigatorKeys[tabItem]!.currentState?.popUntil((route) => route.isFirst);
    } else {
      setState(() => _currentTab = tabItem);
    }
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async =>
          !(await navigatorKeys[_currentTab]!.currentState?.maybePop() ??
              false),
      child: CupertinoHomeScaffold(
        currentTab: _currentTab,
        onSelectTab: _select,
        widgetBuilders: widgetBuilders,
        navigatorKeys: navigatorKeys,
      ),
    );
  }
}
