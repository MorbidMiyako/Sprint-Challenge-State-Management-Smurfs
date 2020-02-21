import React, { useState } from "react"
import { connect } from "react-redux"

import { getData, postData } from "../actions"
//import action

const SmurfForm = props => {

  const [smurf, setSmurf] = useState({
    name: "",
    age: 0,
    height: ""
  })

  const handleChanges = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
      id: Date.now()
    });
    console.log(smurf);
  };

  const handleGetData = e => {
    e.preventDefault();
    props.getData()
  }

  const handlePostData = e => {
    e.preventDefault()
    props.postData(smurf)
  }
  return (
    <>
      {props.isFetchingData ? (
        <div> Loading character </div>
      ) : (props.smurfs.length > 0) ? (
        <form onSubmit={handlePostData}>
          <div>
            <label htmlFor="name">New smurf name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChanges}
              value={smurf.name}
            />
          </div>
          <div>
            <label htmlFor="age">New smurf age</label>
            <input
              id="age"
              type="number"
              name="age"
              onChange={handleChanges}
              value={smurf.age}
            />
          </div>
          <div>
            <label htmlFor="height">New smurf height</label>
            <input
              id="height"
              type="text"
              name="height"
              onChange={handleChanges}
              value={smurf.height}
            />
          </div>
          <button type="submit">Add Smurf</button>
        </form>
      ) : (
            <button onClick={handleGetData}> Load Smurfs </button>
          )
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData,
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { getData, postData },
)(SmurfForm)
/*
export const postData = (newSmurf) => dispatch => {
  newSmurf.age = Number(newSmurf.age)
  console.log("newSmurf inside postData", newSmurf)
  dispatch({ type: POST_DATA })
  axios
    .post("http://localhost:3333/smurfs", {
      name: newSmurf.name,
      age: newSmurf.age,
      height: newSmurf.height,
      id: newSmurf.id
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

*/
