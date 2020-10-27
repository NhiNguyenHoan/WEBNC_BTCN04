import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import AddBoard from "./components/AddBoard";
import Board from "./components/Board";
import BoardsList from "./components/BoardsList";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Retro</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/boards">Boards List</Nav.Link>
      <Nav.Link href="/add">Add New Board</Nav.Link>
    </Nav>
  </Navbar>
      
      <Container className="mt-5">
        <Switch>
          <Route exact path={["/", "/boards"]} component={BoardsList} />
          <Route exact path="/add" component={AddBoard} />
          <Route path="/boards/:id" component={Board} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
