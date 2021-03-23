import 'package:flutter/material.dart';
import 'package:magisterium_mobile_app/constants/keys.dart';
import 'package:magisterium_mobile_app/constants/strings.dart';

enum TabItem { home, entries, account, book }

class TabItemData {
  const TabItemData(
      {required this.key, required this.title, required this.icon});

  final String key;
  final String title;
  final IconData icon;

  static const Map<TabItem, TabItemData> allTabs = {
    TabItem.home: TabItemData(
      key: Keys.jobsTab,
      title: Strings.home,
      icon: Icons.house_sharp,
    ),
    TabItem.entries: TabItemData(
      key: Keys.entriesTab,
      title: Strings.messages,
      icon: Icons.email,
    ),
    TabItem.account: TabItemData(
      key: Keys.accountTab,
      title: Strings.account,
      icon: Icons.person,
    ),
    TabItem.book: TabItemData(
      key: Keys.bookTab,
      title: Strings.book,
      icon: Icons.cast_for_education,
    ),
  };
}
