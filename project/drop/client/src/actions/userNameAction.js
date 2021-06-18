export const UserName = (dispatch, inputValue) => {
  return dispatch({ type: "SET_USERNAME", payload: inputValue });
};
