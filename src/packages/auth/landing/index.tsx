import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRootNavigation } from '@/src/nav/hooks';
import { ROOT_ROUTES } from '@/src/nav/types';
import { Colors } from '@/src/theme';

/**
 * Unauthenticated welcome screen.
 */
const LandingScreen = () => {
  const navigation = useRootNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>THT React Native</Text>
        <Text style={styles.subtitle}>Template with React Navigation + Redux</Text>
        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate(ROOT_ROUTES.AUTH_SIGNIN)}>
          <Text style={styles.primaryButtonText}>Sign in</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate(ROOT_ROUTES.AUTH_SIGNUP)}>
          <Text style={styles.secondaryButtonText}>Create account</Text>
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
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.Gray900,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.Gray500,
    marginBottom: 24,
  },
  primaryButton: {
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: Colors.Primary,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Border,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: Colors.Gray900,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LandingScreen;
