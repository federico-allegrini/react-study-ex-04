import * as actionTypes from "./actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        persons: state.persons.concat(action.person),
      };
    case actionTypes.REMOVE:
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== action.id),
      };
  }
  return state;
};

export default reducer;
