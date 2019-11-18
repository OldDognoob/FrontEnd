import React from "react";

export default function addRecipe(props) {
    return (
    <div>
    <div>{props.recipe.name}</div>
    <div>{props.recipe.description}</div>
    </div>
    )
  
  }
