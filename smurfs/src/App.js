import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import { smurfReducer as reducer } from "./reducers/smurfReducer"
// import { characterReducer as reducer } from "./reducers/characterReducer"

import SmurfList from "./component/SmurfList"
// import CharacterForm from "./components/CharacterForm"
// import CharacterDiv from "./components/CharacterDiv"

const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {
  console.log(store)
  return (
    <Provider store={store}>
      {/* <SmurfForm /> */}
      <SmurfList />
    </Provider>
  );
}
