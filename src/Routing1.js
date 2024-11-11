import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

import Button from "react-bootstrap/Button";
import Getdata from "./Get data";
import Electronics from "./Electronics";
import Jwellery from "./Jwellery";
import Mencloths from "./Mencloths";
function Routing1() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/jewelery">Jwellery</Nav.Link>
            <Nav.Link href="/men's clothing ">Men Cloths</Nav.Link>
            <Nav.Link href="/Women ">Women Cloths</Nav.Link>
            <Nav.Link>
              <Button variant="primary">Login</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="dark">Register</Button>
            </Nav.Link>
            <Nav.Link href="/*"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Getdata}></Route>
          <Route path="electronics" Component={Electronics}></Route>
          <Route path="jewelery" Component={Jwellery}></Route>
          <Route path="men's clothing" Component={Mencloths}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing1;
