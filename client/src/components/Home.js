import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "../styles/Recipe.css";

const RecipeBody = ({ title, image, ingredients }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="col col-md-4">

      </div>
      <div className="col-6 col-md-4">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="card-recipe">
            <h1>{title}</h1>
            <img className="card-image" src={image} alt="" />
            <br />
            <Button variant="primary" onClick={handleShow}>
              View Recipe
            </Button>
            <br /><br />
          </div>
        </div>
        <Modal show={show}>
          <Modal.Header onClick={handleClose} closeButton>
            <Modal.Title><h1>{title}</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="recipe">
              <img className="style.image" src={image} alt="" />
              <br />
              <ul>
                {ingredients.map((ingredient) => (
                  <li key={ingredient.foodId}>{ingredient.text}</li>
                ))}
              </ul>
              <br /><br />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="col col-md-4">

      </div>
    </>
  );
};

  
const Recipe = () => {

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
          <RecipeBody
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

export default Recipe;
