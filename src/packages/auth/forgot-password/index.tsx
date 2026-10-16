import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRootNavigation } from '@/src/nav/hooks';
import { Colors } from '@/src/theme';

/**
 * Forgot-password placeholder.
 */
const ForgotPasswordScreen = () => {
  const navigation = useRootNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Reset password</Text>
        <Text style={styles.body}>Connect your auth provider to implement password reset.</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Back to sign in</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.White },
  content: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 24, fontWeight: '700', color: Colors.Gray900 },
  body: { fontSize: 16, color: Colors.Gray500 },
  link: { color: Colors.Primary, fontSize: 15, marginTop: 16 },
});

export default ForgotPasswordScreen;
