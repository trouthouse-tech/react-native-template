import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRootNavigation } from '@/src/nav/hooks';
import { ROOT_ROUTES } from '@/src/nav/types';
import { bootstrapAppSessionThunk, useAppDispatch, useAppSelector } from '@/src/store';
import { Colors } from '@/src/theme';

/**
 * Bootstrap screen: hydrates session then resets stack based on Redux flags.
 */
const LoadingScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useRootNavigation();
  const currentAuthSession = useAppSelector((state) => state.currentAuthSession);
  const currentOnboarding = useAppSelector((state) => state.currentOnboarding);

  const { isAuthenticated, isHydrated } = currentAuthSession;
  const { isLoaded: isOnboardingLoaded, isComplete: isOnboardingComplete } = currentOnboarding;

  useEffect(() => {
    void dispatch(bootstrapAppSessionThunk());
  }, [dispatch]);

  useEffect(() => {
    if (!isHydrated || !isOnboardingLoaded) {
      return;
    }

    let target: ROOT_ROUTES = ROOT_ROUTES.AUTH_LANDING;
    if (isAuthenticated) {
      target = isOnboardingComplete ? ROOT_ROUTES.MAIN : ROOT_ROUTES.ONBOARDING;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: target }],
    });
  }, [isAuthenticated, isHydrated, isOnboardingLoaded, isOnboardingComplete, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ActivityIndicator size="large" color={Colors.Primary} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;
