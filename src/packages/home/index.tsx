import React, { useEffect, useMemo } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { Item } from '@/src/model';
import {
  incrementTapCount,
  openItemDetailThunk,
  resetTapCount,
  setAppReady,
  useAppDispatch,
  useAppSelector,
} from '@/src/store';
import { Colors } from '@/src/theme';

/**
 * Home tab: demo Redux + item list opening root detail via thunk.
 */
export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const app = useAppSelector((state) => state.app);
  const items = useAppSelector((state) => state.items);
  const currentAuthSession = useAppSelector((state) => state.currentAuthSession);

  const itemList = useMemo(() => Object.values(items), [items]);

  useEffect(() => {
    dispatch(setAppReady(true));
  }, [dispatch]);

  const onOpenItem = (id: string) => {
    void dispatch(openItemDetailThunk(id));
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        {currentAuthSession.email ? (
          <Text style={styles.subtitle}>Signed in as {currentAuthSession.email}</Text>
        ) : null}
        <Text style={styles.line}>app.isReady: {String(app.isReady)} · tapCount: {app.tapCount}</Text>
        <View style={styles.row}>
          <Pressable style={styles.smallButton} onPress={() => dispatch(incrementTapCount())}>
            <Text style={styles.smallButtonText}>Increment</Text>
          </Pressable>
          <Pressable style={styles.smallButtonOutline} onPress={() => dispatch(resetTapCount())}>
            <Text style={styles.smallButtonOutlineText}>Reset</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={itemList}
        keyExtractor={(row) => row.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }: { item: Item }) => (
          <Pressable style={styles.card} onPress={() => onOpenItem(item.id)}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardBody}>{item.description}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    padding: 16,
    gap: 6,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Border,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.Gray900,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.Gray500,
  },
  line: {
    fontSize: 14,
    color: Colors.Gray500,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: Colors.Primary,
  },
  smallButtonText: {
    color: Colors.White,
    fontWeight: '600',
  },
  smallButtonOutline: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.Border,
  },
  smallButtonOutlineText: {
    color: Colors.Gray900,
    fontWeight: '600',
  },
  list: {
    padding: 16,
    gap: 12,
  },
  card: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Border,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.Gray900,
  },
  cardBody: {
    marginTop: 4,
    fontSize: 14,
    color: Colors.Gray500,
  },
});
