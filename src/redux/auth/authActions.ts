import { EAuthTypes } from './authTypes';

interface ISignInAction {
  type: EAuthTypes.SIGN_IN,
}

export const signIn = (): ISignInAction => ({
  type: EAuthTypes.SIGN_IN,
});

interface ISignOutAction {
  type: EAuthTypes.SIGN_OUT,
}

export const signOut = (): ISignOutAction => ({
  type: EAuthTypes.SIGN_OUT,
});

export type AuthActionsType = ISignInAction | ISignOutAction;
