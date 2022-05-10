import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterByStatus, filterByUpcoming, fiterByLaunchDate } from "../redux/features/launceDataSlice";

const Filter = () => {
  const dispatch = useDispatch()
  return (
    <Container> 
      <Form>
        <Row className="my-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Filter By Launch Date</Form.Label>
            <Form.Select onChange={(e) => dispatch(fiterByLaunchDate(e.target.value))} defaultValue="Choose...">
              <option>Select</option>
              <option value="last_week">Last Week</option>
              <option value="last_month">Last Month</option>
              <option value="last_year">Last Year</option>
              <option value="last_5_year">Last 5 Year</option>
              <option value="last_6_year">Last 6 Year</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Filter By Launch Status</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => dispatch(filterByStatus(e.target.value))}>
            <option>Select</option>
              <option value='success'>Success</option>
              <option value='failure'>Failure</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Filter By Upcoming</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => dispatch(filterByUpcoming(e.target.value))}>
            <option>Select</option>
              <option value='upcoming'>Upcoming</option>
              <option value='not_upcoming'>Not Upcoming</option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default Filter;
