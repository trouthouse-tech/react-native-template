import React, { useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRootNavigation } from '@/src/nav/hooks';
import { ROOT_ROUTES } from '@/src/nav/types';
import { signInMockThunk, useAppDispatch, useAppSelector } from '@/src/store';
import { Colors } from '@/src/theme';

/**
 * Mock sign-in screen (use email containing "onboarded" to skip onboarding).
 */
const SigninScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useRootNavigation();
  const authBuilder = useAppSelector((state) => state.authBuilder);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isSubmitting = useMemo(() => authBuilder.status === 'submitting', [authBuilder.status]);

  const handleSignIn = () => {
    void dispatch(signInMockThunk({ email, password })).then((status) => {
      if (status !== 200) {
        return;
      }
      const onboardingComplete = email.trim().toLowerCase().includes('onboarded');
      const target = onboardingComplete ? ROOT_ROUTES.MAIN : ROOT_ROUTES.ONBOARDING;
      navigation.reset({ index: 0, routes: [{ name: target }] });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.content}>
          <Text style={styles.title}>Sign in</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          {authBuilder.signInError ? <Text style={styles.error}>{authBuilder.signInError}</Text> : null}
          <Pressable
            style={[styles.primaryButton, isSubmitting && styles.disabled]}
            disabled={isSubmitting}
            onPress={handleSignIn}>
            <Text style={styles.primaryButtonText}>{isSubmitting ? 'Signing in…' : 'Sign in'}</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate(ROOT_ROUTES.AUTH_FORGOT_PASSWORD)}>
            <Text style={styles.link}>Forgot password</Text>
          </Pressable>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.link}>Back</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  content: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.Gray900,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.Border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  error: {
    color: '#dc2626',
    fontSize: 14,
  },
  primaryButton: {
    marginTop: 8,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: Colors.Primary,
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
  primaryButtonText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    color: Colors.Primary,
    fontSize: 15,
    marginTop: 4,
  },
});

export default SigninScreen;
