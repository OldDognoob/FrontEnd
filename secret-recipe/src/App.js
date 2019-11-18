import React from 'react';
import RegisterForm from "./component/RegisterForm";
import LoginForm from "./component/LoginForm";
import RecipeList from "./component/RecipeList";
import {Route} from "react-router-dom";




export default function App() {
  return (
    <div className="App">
     <RegisterForm />
     <LoginForm />
     <Route exact path="/loginform" component={LoginForm} />
     <RecipeList /> 
    </div>
  );
}


