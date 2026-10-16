import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';

/**
 * Returns the root stack navigator (e.g. for detail from inside a tab).
 */
export const useRootNavigation = (): NativeStackNavigationProp<RootStackParamList> => {
  const nav = useNavigation();
  const root = nav.getParent()?.getParent();
  return (root ?? nav) as unknown as NativeStackNavigationProp<RootStackParamList>;
};
