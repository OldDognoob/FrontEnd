import React, {useState, useEffect} from "react";
import axios from "axios";
import AddRecipe from "./AddRecipe";


export default function RecipeList() {
    const[addRecipe,setAddRecipe] = useState([]);
    
  
    useEffect(() => {
      axios
       .post('./AddRecipe')
       .then(response =>{
        setAddRecipe(response.data.results)
       
    
       })
       .catch(error => {
         console.log(error);
       });
    
    }, []);
  
 
  
     function changeHandler(event) {
       setAddRecipe(event.target.value)
       
     }
  
     
  
    return (
      <section className="recipe-list">
        <addRecipe changeHandler={changeHandler}/>
       <h2>{addRecipe.map(addRecipe => {
            return <AddRecipe key={addRecipe.id} data={addRecipe}   />
       })}</h2>
      </section>
    );
  }

