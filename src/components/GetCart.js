import React, { useCallback, useEffect, useState } from "react";
import { Table } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import axios from "axios";

export default function GetCart() {
  const [cart, setCart] = useState([]);

  /**FUnction to get all Item in cart */
  useEffect(() => {
    Cart();
  }, []);

  const Cart = useCallback(async () => {
    const getCart = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getCart/638b7e4e723a29cad7d4ac76`
    );
    setCart(getCart.data);
    // setCart(getCart.data.user);
  }, []);

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    // {
    //   title: "User Name",
    //   dataIndex: "first_name",
    //   key: "first_name",
    // },
  ];
  return (
    <div>
      <Table dataSource={cart} columns={columns} />
    </div>
  );
}
