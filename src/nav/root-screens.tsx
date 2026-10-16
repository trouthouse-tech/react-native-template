/**
 * Root-level detail screens (outside tab stack). Uses currentItem from Redux; no route params.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ItemDetailPage } from '@/src/packages/item-detail-page';
import { useAppSelector } from '@/src/store/hooks';
import { Colors } from '@/src/theme';

/**
 * Root adapter: reads currentItem and renders detail package or empty state.
 */
export const RootItemDetailScreen = () => {
  const currentItem = useAppSelector((state) => state.currentItem);

  if (!currentItem.id) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>No item selected.</Text>
      </View>
    );
  }

  return <ItemDetailPage />;
};

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    fontSize: 14,
    color: Colors.Gray500,
  },
});
