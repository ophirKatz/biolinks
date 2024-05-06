export enum SearchParamsCodes {
  UserNotFound = 0,
  CantAuthenticateUser = 1,
}

export function getSearchParamsMessage(code: SearchParamsCodes) {
  switch (code) {
    case SearchParamsCodes.UserNotFound:
      return "Could not find user";
    case SearchParamsCodes.CantAuthenticateUser:
      return "Could not authenticate user";
  }
}
