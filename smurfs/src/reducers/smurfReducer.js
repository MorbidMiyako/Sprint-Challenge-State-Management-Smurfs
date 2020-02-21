import { FETCH_DATA, UPDATE_CHARACTER, SET_ERROR } from "../actions";

const initialState = {
  smurfs: [
    {
      name: 'Brainey',
      age: 200,
      height: '5cm',
      id: 0
    }
  ]
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        smurfs: []
      };
    case UPDATE_CHARACTER:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
}

