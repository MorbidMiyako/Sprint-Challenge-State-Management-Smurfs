import React from "react";
import { connect } from "react-redux"

import { deleteData } from "../actions"

const SmurfList = props => {

  console.log("smurfs inside SmurfList", props.smurfs)

  const handleRemove = id => {
    console.log(id)
    props.deleteData(id)
  }

  return (
    <>
      {props.error ? (
        <div> {props.error} </div>
      ) : (
          <>
            {
              props.smurfs.map(smurf => {
                return (
                  <div key={smurf.id}>
                    <h1>{smurf.name}</h1>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                    <p>ID: {smurf.id}</p>
                    <button onClick={() => { handleRemove(smurf.id) }} > Remove</button>
                  </div>
                )
              })
            }
          </>
        )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { deleteData }
)(SmurfList)
