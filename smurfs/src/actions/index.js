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
      console.log("api res in getData", res)
      /*
      console.log("api res in getData", res)
      res.data.length === 0 ? (
        postData(
          {
            name: 'Brainey',
            age: 200,
            height: '5cm',
            id: 0
          }
        )
      ) : (
          dispatch({ type: UPDATE_CHARACTER, payload: res.data })
        )
    })

      */
      dispatch({ type: UPDATE_CHARACTER, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
};

export const postData = (newSmurf) => dispatch => {
  newSmurf.age = Number(newSmurf.age)
  console.log("newSmurf inside postData", newSmurf)
  dispatch({ type: POST_DATA })
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({ type: UPDATE_CHARACTER, payload: res.data })
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
}

export const deleteData = (id) => dispatch => {
  console.log(id)
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: UPDATE_CHARACTER, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
}

export const updateData = (smurf => dispatch => {
  console.log(smurf)
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      getData()
    })
    .catch(err => {
      getData()
    });
})
