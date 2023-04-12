export const LoginStart = (userCredentials) => ({
  type:"LOGIN_START",
})

export const LoginSuccess = (user) => ({
  type:"LOGIN_SUCCESS",
  payload:user,
})

export const LoginError = (error) => ({
  type:"LOGIN_ERROR",
  payload:error,
})