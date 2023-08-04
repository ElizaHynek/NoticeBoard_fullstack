//selectors
export const getAllUsers = ({ users }) => users;

// actions
const createActionName = actionName => `app/users/${actionName}`;
const LOGIN = createActionName('LOGIN');
const LOGOUT = createActionName('LOGOUT');

// action creators
export const login = payload => ({ type: LOGIN, payload });
export const logout = payload => ({ type: LOGOUT, payload });

const usersReducer = (statePart = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return statePart;
  };
};

export default usersReducer;