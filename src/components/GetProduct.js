import React, { useCallback, useEffect, useState } from "react";
import { Table, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function () {
  const [data, setData] = useState([]);
  let navigate = useNavigate()

  /**FUnction to get all Products */
  useEffect(() => {
    Products();
  }, []);

  const Products = useCallback(async () => {
    const getProduct = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getProduct/638c5f7ab02676a93989de38`
    );
    setData(getProduct.data);
  }, []);

  /**Function to add the items into cart */
  const handleCart = (product) => {
    const getData = {
      product: product._id,
    };
    const addCart = axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/addCart`,
      getData
    );
    return addCart;
  };

  /**Functon to call carrt route */
  const showCart = () => {
    navigate("/showCartDetails")
  }

  const columns = [
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Stock Qty",
      dataIndex: "stock_qty",
      key: "stock_qty",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Add To Cart",
      render: (record) => {
        return (
          <>
            <ShoppingCartOutlined onClick={() => handleCart(record)} />
          </>
        );
      },
    },
  ];
  return (
    <div>
      <Button onClick={showCart}>Get Cart Details</Button>    
      <Table dataSource={data} columns={columns} />
    </div>
  );
}
