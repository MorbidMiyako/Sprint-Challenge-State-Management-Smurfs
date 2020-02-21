import axios from "axios"

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CHARACTER = "UPDATE_CHARACTER";
export const SET_ERROR = "SET_ERROR";
export const POST_DATA = "POST_DATA"
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: UPDATE_CHARACTER, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
  // .post()
};
