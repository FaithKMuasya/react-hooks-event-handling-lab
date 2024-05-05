// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {

  return (
    <button 
    onFocus={(a)=> {console.log("Good!")}}
    onBlur={(a)=> {console.log("Hey! Eyes on me!")}}
    >Eyes on me</button>
  )

}
export default EyesOnMe