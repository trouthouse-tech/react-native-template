import type { AppThunk } from '@/src/store/types';
import { CurrentAuthSessionActions } from '@/src/store/current/auth-session';
import { CurrentOnboardingActions } from '@/src/store/current/onboarding';
import { AuthBuilderActions } from '@/src/store/builders/authBuilder';
import { clearStoredSession } from '@/src/store/thunks/auth/session-storage';
import { rootNavigationRef } from '@/src/nav/root-navigation-ref';
import { ROOT_ROUTES } from '@/src/nav/types';

/**
 * Clears session and resets navigation to auth landing.
 */
export const signOutThunk =
  (): AppThunk<Promise<200>> =>
  async (dispatch) => {
    await clearStoredSession();
    dispatch(CurrentAuthSessionActions.reset());
    dispatch(CurrentOnboardingActions.reset());
    dispatch(CurrentOnboardingActions.setOnboardingLoaded(true));
    dispatch(CurrentAuthSessionActions.setIsHydrated(true));
    dispatch(AuthBuilderActions.reset());

    if (rootNavigationRef.isReady()) {
      rootNavigationRef.reset({
        index: 0,
        routes: [{ name: ROOT_ROUTES.AUTH_LANDING }],
      });
    }
    return 200;
  };
