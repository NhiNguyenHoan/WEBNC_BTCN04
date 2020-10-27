import React, { useState, useEffect } from "react";
import BoardDataService from "../services/BoardService";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
const BoardsList = () => {
  const [boards, setBoards] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveBoards();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveBoards = () => {
    BoardDataService.getAll()
      .then((response) => {
        setBoards(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveBoards();

  };


  const removeAllBoards = () => {
    BoardDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    BoardDataService.findByTitle(searchTitle)
      .then((response) => {
        setBoards(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Row>
      <Col md={8} >
        <InputGroup className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <InputGroup.Append>
            <Button variant="dark" onClick={findByTitle}>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
      <Col md={8}>
        <h4>My Boards</h4>

        <CardColumns>
          {boards &&
            boards.map((board, index) => (
              <Card>
                <Card.Img variant="top" src="../images/1.jpg" />
                <Card.Body>
                  <Card.Title>{board.title}</Card.Title>
                  <Card.Text>{board.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to={{pathname: `/boards/${index}`}}>
                    <Button variant="dark" >View</Button>
                  </Link>
                </Card.Footer>
              </Card>
            ))}
        </CardColumns>

        <Button variant="danger" size="sm" onClick={removeAllBoards}>
          Remove All
        </Button>
      </Col>
    </Row>
  );
};

export default BoardsList;
