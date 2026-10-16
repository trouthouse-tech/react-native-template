import type { AppThunk } from '@/src/store/types';
import { CurrentItemActions } from '@/src/store/current/item';
import { navigateRoot } from '@/src/nav/root-navigation-ref';
import { ROOT_ROUTES } from '@/src/nav/types';

/**
 * Sets current item from dump and opens root stack detail screen.
 */
export const openItemDetailThunk =
  (itemId: string): AppThunk<Promise<200 | 400>> =>
  async (dispatch, getState) => {
    const item = getState().items[itemId];
    if (!item) {
      return 400;
    }
    dispatch(CurrentItemActions.setCurrentItem(item));
    navigateRoot(ROOT_ROUTES.ITEM_DETAIL);
    return 200;
  };
