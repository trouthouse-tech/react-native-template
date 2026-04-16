/**
 * Root navigator entry (mirrors roads-buyer-mobile: App → RootNavigator).
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@/src/packages/home';
import { ROOT_ROUTES, type RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROOT_ROUTES.HOME}
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name={ROOT_ROUTES.HOME} component={HomeScreen} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
