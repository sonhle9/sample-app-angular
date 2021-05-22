import { Action } from '@ngrx/store';
import { User } from '../../models/user';
import { AuthActionTypes, All } from '../actions/auth.actions';


export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: true,
  user: 
  {
    activated: true,
    activated_at: "2020-05-04T19:40:08.751Z",
    activation_digest: "$2a$12$44OKu4ShrVk5xsi3hNw3v.wrdQVupmQ33CF8q5qymzzXSL4jaiE6K",
    admin: true,
    created_at: "2020-05-04T19:40:09.222Z",
    email: "example@railstutorial.org",
    id: 1,
    name: "Example User",
    password_digest: "$2a$12$W4sGhZZGE5eSYT50iee9GuQiZ7fsqCT7tjxgXDgF7QUJy4pN12Bx6",
    // remember_digest: null,
    // reset_digest: null,
    // reset_sent_at: null,
    updated_at: "2021-05-20T06:48:55.476Z"
  },
  errorMessage: null
  };

export function reducer(state = initialState, action: any): State {
  switch (action.type) {
    case AuthActionTypes.GET_STATUS: {
      console.log('GET_STATUS', action);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user.user,
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      console.log('action', action);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user.user,
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload.error
      };
    }
    case AuthActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: null
      };
    }
    case AuthActionTypes.SIGNUP_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload.error
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
