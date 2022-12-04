import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import productSchema from "../validation/validationProduct";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";

export default function Product() {
  let navigate = useNavigate();
  const addProduct = (value) => {
    const product = {
      product_name: value.productName,
      stock_qty: value.stockQty,
      price: value.price,
    };
    const data = axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/addProduct/`,
      product
    );
    // navigate("/home");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          width: "20%",
          padding: "10px",
        }}
      >
        <p></p>
        <b style={{ fontSize: "20px" }}>Add Products</b>

        <Formik
          initialValues={{
            productName: "",
            stockQty: "",
            price: "",
          }}
          validationSchema={productSchema}
          onSubmit={(values, { setSubmitting }) => {
            addProduct(values);
            setSubmitting(false);
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                label="productName"
                name="productName"
                type="text"
              />
              {errors.productName && touched.productName ? (
                <div className="validate">{errors.productName}</div>
              ) : null}
              <Field
                as={TextField}
                label="stockQty"
                name="stockQty"
                type="text"
              />
              {errors.stockQty && touched.stockQty ? (
                <div className="validate">{errors.stockQty}</div>
              ) : null}
              <Field as={TextField} label="price" name="price" type="text" />
              {errors.price && touched.price ? (
                <div className="validate">{errors.price}</div>
              ) : null}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
                style={{ marginTop: "15px" }}
              >
                Add Product
              </Button>
              {"  "}

              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "15px" }}
                onClick={() => navigate("/getProduct")}
              >
                Show Products
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
