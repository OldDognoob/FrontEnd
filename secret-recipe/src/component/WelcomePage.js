import React from "react";

import {Link} from "react-router-dom";


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to Family secret recipes</h1>
        <img
          className="main-img"
          src=""
          alt="recipe"
        />
        <Link to='/recipes'><Button>Recipes</Button></Link>
      </Header>
    </section>
  );
}