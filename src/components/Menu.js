import React from "react";
import { Container, Form, FormControl, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { searchByRocketName } from "../redux/features/launceDataSlice";

const Menu = () => {
  const { launces, filteredItems } = useSelector((state) => state.launce);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(searchByRocketName(e.target.value));
    console.log(launces, filteredItems);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SpaceX Rockets</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="d-flex ms-auto">
              <FormControl
                type="search"
                placeholder="Search By Rocket Name"
                className="me-2 w-100"
                onChange={handleSearch}
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
