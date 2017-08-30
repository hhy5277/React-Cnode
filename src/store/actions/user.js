export const GETUSERINFO = 'GETUSERINFO';

export const GETUSERINFO_SUCCESS = 'GETUSERINFO_SUCCESS';

export const GETUSERINFO_FAIL = 'GETUSERINFO_FAIL';

export const LOGIN = 'LOGIN';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT = 'LOGOUT';

export const getuserInfo = () => ({
  type: GETUSERINFO
});

export const getuserInfoSuccess = (info) => ({
  type: GETUSERINFO_SUCCESS,
  info
});

export const getUserInfoFail = () => ({
  type: GETUSERINFO_FAIL
});

export const login = () => ({
  type: LOGIN
});

export const loginSuccess = (accesstoken, loginname) => ({
  type: LOGIN_SUCCESS,
  loginname,
  accesstoken
});

export const loginFail  = () => ({
  type: LOGIN_FAIL
});


export const logout = () => ({
  type: LOGOUT
});