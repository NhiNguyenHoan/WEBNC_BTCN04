import React, { useState } from "react";
import BoardDataService from "../services/BoardService";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const AddBoard = () => {
  const initialBoardState = {
    id: null,
    user_id: 1,
    title: "",
    description: "",
  };
  const [board, setBoard] = useState(initialBoardState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBoard({ ...board, [name]: value });
  };

  const saveBoard = () => {
    var data = {
      user_id: 1,
      title: board.title,
      description: board.description,
    };

    BoardDataService.create(data)
      .then((response) => {
        setBoard({
          id: response.data.id,
          user_id: 1,
          title: response.data.title,
          description: response.data.description,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newBoard = () => {
    setBoard(initialBoardState);
    setSubmitted(false);
  };

  return (
    <Form>
      {submitted ? (
        <div >
          <h4>You submitted successfully!</h4>
          <Button variant="success" onClick={newBoard}>
            Add
          </Button>
        </div>
      ) : (
        <div >
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col sm="10">
              <Form.Control
                id="title"
                required
                value={board.title}
                onChange={handleInputChange}
                name="title"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="10">
              <Form.Control
                id="description"
                required
                value={board.description}
                onChange={handleInputChange}
                name="description"
              />
            </Col>
          </Form.Group>

          <Button variant="success" type="submit" onClick={saveBoard}>
            Submit
          </Button>
        </div>
      )}
    </Form>
  );
};

export default AddBoard;
