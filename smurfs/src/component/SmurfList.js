import React from "react";
import { connect } from "react-redux"

const SmurfList = props => {

  console.log("smurfs inside SmurfList", props.smurfs)

  return (
    <>
      {props.error ? (
        <div> {props.error} </div>
      ) : (
          <>
            {
              props.smurfs.map(smurf => {
                return (
                  <div>
                    <h1>{smurf.name}</h1>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
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
  {}
)(SmurfList)
