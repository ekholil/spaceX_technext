import React from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLaunches } from "../redux/features/launceDataSlice";
import { useEffect } from "react";
import DataCard from "./DataCard";

import Menu from "./Menu";
import Filter from "./Filter";
import Footer from "./Footer";

const Home = () => {
  const { launces, filteredItems } = useSelector((state) => state.launce);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLaunches());
  }, [dispatch]);
  let displayData;
  if (filteredItems.length) {
    displayData = filteredItems;
  } else {
    displayData = launces;
  }

 
  return (
    <div>
      <Menu />
      <Filter />
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4">
          {displayData.map((data, index) => (
            <DataCard data={data} key={index} />
          ))}
        </Row>
        {displayData.length === 0 && <div className="d-flex justify-content-center">
          <img src="/loader.gif" alt="loader" />
          </div>}
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
