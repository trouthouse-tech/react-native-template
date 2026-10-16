/**
 * Root navigator entry (mirrors roads-buyer-mobile: App → RootNavigator).
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen from '@/src/packages/auth/loading';
import LandingScreen from '@/src/packages/auth/landing';
import SigninScreen from '@/src/packages/auth/signin';
import SignupScreen from '@/src/packages/auth/signup';
import ForgotPasswordScreen from '@/src/packages/auth/forgot-password';
import OnboardingScreen from '@/src/packages/auth/onboarding';
import MainTabs from './tabs';
import { RootItemDetailScreen } from './root-screens';
import { rootNavigationRef } from './root-navigation-ref';
import { ROOT_ROUTES, type RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <Stack.Navigator
        initialRouteName={ROOT_ROUTES.LOADING}
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen name={ROOT_ROUTES.LOADING} component={LoadingScreen} />
        <Stack.Screen name={ROOT_ROUTES.AUTH_LANDING} component={LandingScreen} />
        <Stack.Screen name={ROOT_ROUTES.AUTH_SIGNIN} component={SigninScreen} />
        <Stack.Screen name={ROOT_ROUTES.AUTH_SIGNUP} component={SignupScreen} />
        <Stack.Screen name={ROOT_ROUTES.AUTH_FORGOT_PASSWORD} component={ForgotPasswordScreen} />
        <Stack.Screen name={ROOT_ROUTES.ONBOARDING} component={OnboardingScreen} />
        <Stack.Screen name={ROOT_ROUTES.MAIN} component={MainTabs} />
        <Stack.Screen
          name={ROOT_ROUTES.ITEM_DETAIL}
          component={RootItemDetailScreen}
          options={{ headerShown: true, title: 'Item detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
