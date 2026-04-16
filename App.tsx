import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-reanimated';

import { store } from '@/src/store';
import RootNavigator from '@/src/nav';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar style="auto" />
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}
