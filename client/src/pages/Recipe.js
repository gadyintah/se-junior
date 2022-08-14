import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Recipe.css";

const Recipe = ({ title, image, ingredients }) => {
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

export default Recipe;
