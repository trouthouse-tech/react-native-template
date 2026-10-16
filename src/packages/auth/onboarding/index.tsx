import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { completeOnboardingThunk, useAppDispatch } from '@/src/store';
import { Colors } from '@/src/theme';

/**
 * Onboarding placeholder — completes setup and navigates to main tabs.
 */
const OnboardingScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Finish setup</Text>
        <Text style={styles.body}>One-step onboarding stub for the template auth shell.</Text>
        <Pressable style={styles.primaryButton} onPress={() => void dispatch(completeOnboardingThunk())}>
          <Text style={styles.primaryButtonText}>Complete setup</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.White },
  content: { flex: 1, padding: 24, gap: 12, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', color: Colors.Gray900 },
  body: { fontSize: 16, color: Colors.Gray500, marginBottom: 16 },
  primaryButton: {
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: Colors.Primary,
    alignItems: 'center',
  },
  primaryButtonText: { color: Colors.White, fontSize: 16, fontWeight: '600' },
});

export default OnboardingScreen;
