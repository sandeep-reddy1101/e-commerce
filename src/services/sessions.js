const sessionKeys = { userLoginInfo : "userLoginInfo" }

// Returns value from session storage based on key
export const getUserLoginInfoFromSession = () => {
    const value = sessionStorage.getItem(sessionKeys.userLoginInfo);
    return value;
}

// Adds key value pair to session storage
export const setUserLoginInfoToSession = (value) => {
    sessionStorage.setItem(sessionKeys.userLoginInfo, value);
}

// Removes the key value pair from session storage
export const removeUserLoginInfoFromSession = () => {
    sessionStorage.removeItem(sessionKeys.userLoginInfo);
}