import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router";

export default function SideBar() {
  let navigate = useNavigate();
  const addProduct = () => {
    navigate("/product");
    //   <Product/>
  };
  const showProducts = () => {
    navigate("/getproduct");
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "15px" }}
        onClick={addProduct}
      >
        Add Product
      </Button>{" "}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "15px" }}
        onClick={showProducts}
      >
        Show Products
      </Button>
    </div>
  );
}
