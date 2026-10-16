import type { AppThunk } from '@/src/store/types';
import { CurrentAuthSessionActions } from '@/src/store/current/auth-session';
import { CurrentOnboardingActions } from '@/src/store/current/onboarding';
import { ItemsActions } from '@/src/store/dumps/items';
import { SEED_ITEMS } from '@/src/store/thunks/auth/seed-items';
import { readStoredSession } from '@/src/store/thunks/auth/session-storage';

/**
 * Hydrates auth/onboarding from storage and seeds demo catalog data.
 */
export const bootstrapAppSessionThunk =
  (): AppThunk<Promise<200>> =>
  async (dispatch) => {
    dispatch(ItemsActions.upsertItems(SEED_ITEMS));

    await new Promise((resolve) => setTimeout(resolve, 300));

    const stored = await readStoredSession();
    if (stored) {
      dispatch(
        CurrentAuthSessionActions.setSession({
          userId: stored.userId,
          email: stored.email,
        }),
      );
      dispatch(CurrentOnboardingActions.setOnboardingComplete(stored.onboardingComplete));
    } else {
      dispatch(CurrentAuthSessionActions.setSession(null));
      dispatch(CurrentOnboardingActions.setOnboardingComplete(false));
    }

    dispatch(CurrentOnboardingActions.setOnboardingLoaded(true));
    dispatch(CurrentAuthSessionActions.setIsHydrated(true));
    return 200;
  };
