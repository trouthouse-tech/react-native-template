import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRootNavigation } from '@/src/nav/hooks';
import { ROOT_ROUTES } from '@/src/nav/types';
import { Colors } from '@/src/theme';

/**
 * Sign-up placeholder — wire to your auth provider in product apps.
 */
const SignupScreen = () => {
  const navigation = useRootNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.body}>Stub screen. Use Sign in with any email/password for the mock flow.</Text>
        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate(ROOT_ROUTES.AUTH_SIGNIN)}>
          <Text style={styles.primaryButtonText}>Go to sign in</Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Back</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.White },
  content: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 24, fontWeight: '700', color: Colors.Gray900 },
  body: { fontSize: 16, color: Colors.Gray500, marginBottom: 16 },
  primaryButton: {
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: Colors.Primary,
    alignItems: 'center',
  },
  primaryButtonText: { color: Colors.White, fontSize: 16, fontWeight: '600' },
  link: { color: Colors.Primary, fontSize: 15, marginTop: 8 },
});

export default SignupScreen;
