import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { signOutThunk, useAppDispatch } from '@/src/store';
import { Colors } from '@/src/theme';

/**
 * Settings tab stub with sign out.
 */
export const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <Pressable style={styles.dangerButton} onPress={() => void dispatch(signOutThunk())}>
          <Text style={styles.dangerButtonText}>Sign out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  content: {
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.Gray900,
  },
  dangerButton: {
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fecaca',
    backgroundColor: '#fef2f2',
    alignItems: 'center',
  },
  dangerButtonText: {
    color: '#b91c1c',
    fontSize: 16,
    fontWeight: '600',
  },
});
