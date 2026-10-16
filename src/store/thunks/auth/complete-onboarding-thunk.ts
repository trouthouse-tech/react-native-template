import type { AppThunk } from '@/src/store/types';
import { CurrentOnboardingActions } from '@/src/store/current/onboarding';
import { readStoredSession, writeStoredSession } from '@/src/store/thunks/auth/session-storage';
import { navigateRoot } from '@/src/nav/root-navigation-ref';
import { ROOT_ROUTES } from '@/src/nav/types';

/**
 * Marks onboarding complete in storage and navigates to main tabs.
 */
export const completeOnboardingThunk =
  (): AppThunk<Promise<200>> =>
  async (dispatch) => {
    const stored = await readStoredSession();
    if (stored) {
      await writeStoredSession({ ...stored, onboardingComplete: true });
    }
    dispatch(CurrentOnboardingActions.setOnboardingComplete(true));
    navigateRoot(ROOT_ROUTES.MAIN);
    return 200;
  };
