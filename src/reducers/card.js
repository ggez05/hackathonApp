import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/ActionTypes";
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];

    case UPDATE:
      return state.map((card) =>
        card._id === action.payload._id ? action.payload : card
      );
    case DELETE:
      return state.filter((card) => card._id !== action.payload);
    default:
      return state;
  }
};
