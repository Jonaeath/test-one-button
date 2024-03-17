import React from "react";
import { Button } from "react-bootstrap";

const PageOne = (props) => {
  return (
    <div>
      <Button variant="success" className="m-2 w-75" onClick={() => props.onClick("all")}>All Data</Button>
      <br/>
      <Button variant="success" className="m-2 w-75" onClick={() => props.onClick("men-clothing")}>Men-Clothing</Button>
      <br />
      <Button variant="success" className="m-2 w-75" onClick={() => props.onClick("jewelery")}>Jewelery</Button>
      <br />
      <Button variant="success" className="m-2 w-75" onClick={() => props.onClick("electronics")}>Electronics</Button>
      <br />
      <Button variant="success" className="m-2 w-75" onClick={() => props.onClick("woman-clothing")}>Woman-Clothing</Button>
    </div>
  );
};

export default PageOne;
