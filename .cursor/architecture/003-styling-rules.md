# 003 - Styling Rules (React Native)

## Status

Accepted

## Scope

How styling is written in this Expo + React Native codebase.

## Required pattern

1. Define the **component first**.
2. Define `const styles = StyleSheet.create({ ... })` **after** the component.
3. Use **`Colors`** (and future tokens) from `@/src/theme` for shared palette.
4. Do **not** add per-component `.css` files or CSS modules.
5. Avoid inline `style={{ ... }}` except truly dynamic values (document in code if needed).

## Correct example

```tsx
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/src/theme';

export const Title = ({ label }: { label: string }) => (
  <View style={styles.wrap}>
    <Text style={styles.text}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrap: { padding: 16 },
  text: { fontSize: 18, fontWeight: '600', color: Colors.Gray900 },
});
```

## Consequences

Consistent with Roads mobile (`roads-buyer-mobile`, `roads-seller-mobile`) screen files.
