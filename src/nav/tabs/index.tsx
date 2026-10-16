/**
 * Main tab navigator (template: Home + Settings).
 */

import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HomeScreen } from '@/src/packages/home';
import { SettingsScreen } from '@/src/packages/settings';
import { Colors } from '@/src/theme';
import { HomeTabIcon, SettingsTabIcon } from './icons';
import { MAIN_ROUTES, type MainTabParamList } from './types';

const Tabs = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  const insets = useSafeAreaInsets();
  const bottomSafeAreaInset = Platform.OS === 'android' ? 0 : insets.bottom;

  return (
    <Tabs.Navigator
      safeAreaInsets={Platform.OS === 'android' ? { bottom: 0 } : undefined}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Primary,
        tabBarInactiveTintColor: Colors.Gray400,
        tabBarStyle: {
          backgroundColor: Colors.White,
          paddingBottom: (Platform.OS === 'android' ? 6 : 2) + bottomSafeAreaInset,
          borderTopWidth: 1,
          borderTopColor: Colors.Border,
        },
      }}
      initialRouteName={MAIN_ROUTES.HOME}>
      <Tabs.Screen
        name={MAIN_ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => HomeTabIcon(22, color),
        }}
      />
      <Tabs.Screen
        name={MAIN_ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => SettingsTabIcon(22, color),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
