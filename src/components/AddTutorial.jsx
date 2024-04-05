import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
const AddTutorial = ({ getTutorial }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutorial = { title, description };
    addNewTutorial(newTutorial);
    setTitle("");
    setDescription("");
  };
  const addNewTutorial = async (newTutorial) => {
    const url = "https://65f48267f54db27bc021de27.mockapi.io/tutorial";
    try {
      await axios.post(url, newTutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorial();
  };
  return (
    <div>
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary w-50" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTutorial;