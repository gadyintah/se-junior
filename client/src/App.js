import React, { useEffect, useState } from "react";
import Recipe from "./pages/Recipe";
import axios from "axios";
import "./App.css";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:5000/recipes/${query}`);
    setRecipes(response.data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <div className="col-6 col-md-4">

        </div>
        <div className="col-6 col-md-4">
          <input
            className="form-control col-6 col-md-4"
            type="search"
            value={search}
            onChange={updateSearch}
          />
        </div>
        <div  className="col-1">
          
        </div>
        <div className="col-6 col-md-4">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.uri}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            next={recipe.recipe.next}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
