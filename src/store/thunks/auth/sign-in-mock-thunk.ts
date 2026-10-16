import type { AppThunk } from '@/src/store/types';
import { AuthBuilderActions } from '@/src/store/builders/authBuilder';
import { CurrentAuthSessionActions } from '@/src/store/current/auth-session';
import { CurrentOnboardingActions } from '@/src/store/current/onboarding';
import { writeStoredSession } from '@/src/store/thunks/auth/session-storage';

type SignInMockInput = {
  email: string;
  password: string;
};

/**
 * Mock sign-in for the template (no backend). Requires non-empty email and password.
 */
export const signInMockThunk =
  ({ email, password }: SignInMockInput): AppThunk<Promise<200 | 400>> =>
  async (dispatch) => {
    dispatch(AuthBuilderActions.setStatus('submitting'));
    dispatch(AuthBuilderActions.setSignInError(''));

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      dispatch(AuthBuilderActions.setSignInError('Email and password are required.'));
      dispatch(AuthBuilderActions.setStatus('idle'));
      return 400;
    }

    const userId = `user-${trimmedEmail.toLowerCase()}`;
    const onboardingComplete = trimmedEmail.toLowerCase().includes('onboarded');

    await writeStoredSession({
      userId,
      email: trimmedEmail,
      onboardingComplete,
    });

    dispatch(
      CurrentAuthSessionActions.setSession({
        userId,
        email: trimmedEmail,
      }),
    );
    dispatch(CurrentOnboardingActions.setOnboardingLoaded(true));
    dispatch(CurrentOnboardingActions.setOnboardingComplete(onboardingComplete));

    dispatch(AuthBuilderActions.setStatus('idle'));
    return 200;
  };
