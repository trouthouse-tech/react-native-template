import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAppSelector } from '@/src/store/hooks';
import { Colors } from '@/src/theme';

/**
 * Item detail reads currentItem only (no route params).
 */
export const ItemDetailPage = () => {
  const navigation = useNavigation();
  const currentItem = useAppSelector((state) => state.currentItem);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentItem.title}</Text>
      <Text style={styles.body}>{currentItem.description}</Text>
      <Text style={styles.meta}>id: {currentItem.id}</Text>
      <Text style={styles.backLink} onPress={() => navigation.goBack()}>
        ← Back
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.White,
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.Gray900,
  },
  body: {
    fontSize: 16,
    color: Colors.Gray500,
  },
  meta: {
    fontSize: 13,
    color: Colors.Gray400,
    marginTop: 8,
  },
  backLink: {
    marginTop: 24,
    fontSize: 16,
    color: Colors.Primary,
    fontWeight: '600',
  },
});
