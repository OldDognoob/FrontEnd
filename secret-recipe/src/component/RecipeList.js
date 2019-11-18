import React, {useState, UseEffect} from "react";
import axios from "axios";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";


export default function RecipeList(props) {
    const[recipe, setRecipe] = useState("");
    const[addrecipe,setAddRecipe] = useState("");
    
  
    useEffect(() => {
      axios
       .post('')
       .then(response =>{
        setRecipe(response.data.results)
        setAddRecipe(response.data.results)
       
    
       })
       .catch(error => {
         console.log(error);
       });
    
    }, [recipe]);
  
 
  
     function changeHandler(event) {
       setRecipe(event.target.value)
       
     }
  
     
  
    return (
      <section className="recipe-list">
        <Recipe changeHandler={changeHandler}/>
       <h2>{addrecipe.map(recipe => {
            return <recipe key={recipe.id} data={recipe}   />
       })}</h2>
      </section>
    );
  }

