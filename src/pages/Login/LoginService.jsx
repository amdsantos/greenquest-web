export const setUserMethod = (codeResponse) => {
  sessionStorage.setItem("userData", JSON.stringify(codeResponse));
};

export const getUserMethod = () => {
  return JSON.parse(sessionStorage.getItem("userData"));
};

export const removeUserMethod = () => {
  return sessionStorage.removeItem("userData");
};
