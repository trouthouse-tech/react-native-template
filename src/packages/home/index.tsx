/**
 * Starter home screen: reads / updates `app` slice (Redux Toolkit).
 */

import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';

import { incrementTapCount, resetTapCount, setAppReady, useAppDispatch, useAppSelector } from '@/src/store';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { isReady, tapCount } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(setAppReady(true));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THT React Native Template</Text>
      <Text style={styles.line}>Redux app.isReady: {String(isReady)}</Text>
      <Text style={styles.line}>tapCount: {tapCount}</Text>
      <Pressable style={styles.button} onPress={() => dispatch(incrementTapCount())}>
        <Text style={styles.buttonText}>Increment (Redux)</Text>
      </Pressable>
      <Pressable style={styles.buttonSecondary} onPress={() => dispatch(resetTapCount())}>
        <Text style={styles.buttonSecondaryText}>Reset count</Text>
      </Pressable>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
    justifyContent: 'center' as const,
  },
  title: {
    fontSize: 20,
    fontWeight: '700' as const,
    marginBottom: 8,
  },
  line: {
    fontSize: 16,
  },
  button: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#2563eb',
    alignItems: 'center' as const,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  buttonSecondary: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    alignItems: 'center' as const,
  },
  buttonSecondaryText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#0f172a',
  },
};
