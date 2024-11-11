import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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
            <Link href="/">Home</Link>
            <Link href="/electronics">Electronics</Link>
            <Link href="/jewelery">Jwellery</Link>
            <Link href="/men's clothing ">Men Cloths</Link>
            <Link href="/Women ">Women Cloths</Link>
            <Link>
              <Button variant="primary">Login</Button>
            </Link>
            <Link>
              <Button variant="dark">Register</Button>
            </Link>
            <Link href="/*"></Link>
          </Nav>
        </Container>
      </Navbar>
      
        <Routes>
          <Route path="/" Component={Getdata}></Route>
          <Route path="electronics" Component={Electronics}></Route>
          <Route path="jewelery" Component={Jwellery}></Route>
          <Route path="men's clothing" Component={Mencloths}></Route>
        </Routes>
    </>
  );
}

export default Routing1;
