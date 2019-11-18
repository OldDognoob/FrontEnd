import React from "react";

export default function Recipe(props) {
  return (
  <div>
  <div>{props.data.name}</div>
  <div>{props.data.description}</div>
  <div><img src={props.data.image} alt='recipe'/></div> 
  </div>
  )

}