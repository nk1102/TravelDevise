import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
/**
 * Sign in method export const is created in order to let the user signin in the application successfully
 */
export const signin = (formData, Navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    Navigate('/');
  } catch (error) {
    console.log(error);
  }
};

/**
 * Sign up method is used for the registration purpose of the user so that the user can use our application 
 */
export const signup = (formData, Navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    Navigate('/');
  } catch (error) {
    console.log(error);
  }
};