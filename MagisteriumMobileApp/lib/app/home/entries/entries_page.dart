import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:magisterium_mobile_app/app/home/entries/entries_view_model.dart';
import 'package:magisterium_mobile_app/app/home/entries/entries_list_tile.dart';
import 'package:magisterium_mobile_app/app/home/jobs/list_items_builder.dart';
import 'package:magisterium_mobile_app/app/top_level_providers.dart';
import 'package:magisterium_mobile_app/constants/strings.dart';

final entriesTileModelStreamProvider =
    StreamProvider.autoDispose<List<EntriesListTileModel>>(
  (ref) {
    final database = ref.watch(databaseProvider);
    final vm = EntriesViewModel(database: database);
    return vm.entriesTileModelStream;
  },
);

class EntriesPage extends ConsumerWidget {
  @override
  Widget build(BuildContext context, ScopedReader watch) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(Strings.messages),
        elevation: 2.0,
      ),
      body: _buildContents(context, watch),
    );
  }

  Widget _buildContents(BuildContext context, ScopedReader watch) {
    final entriesTileModelStream = watch(entriesTileModelStreamProvider);
    return ListItemsBuilder<EntriesListTileModel>(
      data: entriesTileModelStream,
      itemBuilder: (context, model) => EntriesListTile(model: model),
    );
  }
}
