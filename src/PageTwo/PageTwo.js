import React from "react";
import Card from "./Card";
import { Stack, Row, Col, Button } from "react-bootstrap";

const PageTwo = (props) => {
  let filteredData;

  if (props.filter === "men-clothing") {
    filteredData = props.data.filter(
      (item) => item.category === "men-clothing"
    );
  } else if (props.filter === "jewelery") {
    filteredData = props.data.filter((item) => item.category === "jewelery");
  } else if (props.filter === "electronics") {
    filteredData = props.data.filter((item) => item.category === "electronics");
  } else if (props.filter === "woman-clothing") {
    filteredData = props.data.filter(
      (item) => item.category === "woman-clothing"
    );
  } else {
    filteredData = props.data;
  }
  const title =
    props.filter === "men-clothing"
      ? "Men Clothing Data"
      : props.filter === "jewelery"
      ? "Jewelery Data"
      : props.filter === "electronics"
      ? "Electronics Data"
      : props.filter === "woman-clothing"
      ? "Woman Clothing Data"
      : "All Data";

  return (
    <div>
      <div className="flex">
       
          <Button
            variant="primary"
            className="m-2"
            onClick={() => props.onClick("all")}
          >
            All Data
          </Button>
         
   
          <Button
            variant="primary"
            className="m-2"
            onClick={() => props.onClick("men-clothing")}
          >
            Men-Clothing
          </Button>
        
          <Button
            variant="primary"
            className="m-2"
            onClick={() => props.onClick("jewelery")}
          >
            Jewelery
          </Button>
       
          <Button
            variant="primary"
            className="m-2"
            onClick={() => props.onClick("electronics")}
          >
            Electronics
          </Button>
         
          <Button
            variant="primary"
            className="m-2"
            onClick={() => props.onClick("woman-clothing")}
          >
            Woman-Clothing
          </Button>
        
      </div>
      <h2>{title}</h2>
      <Stack direction="horizontal" gap={3}>
        <Row xs={1} md={3} className="g-4">
          {filteredData.map((item) => (
            <Col key={item.id}>
              <Card item={item} />
            </Col>
          ))}
        </Row>
      </Stack>
    </div>
  );
};

export default PageTwo;
