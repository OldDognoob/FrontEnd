import React from 'react';
import RegisterForm from "./component/RegisterForm";
import LoginForm from "./component/LoginForm";
import RecipeList from "./component/RecipeList";





export default function App() {
  return (
    <div className="App">
     <RegisterForm />
     <LoginForm />
     <RecipeList /> 
    </div>
  );
}


