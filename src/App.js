import React, { useState, useEffect } from "react";
import Axios from "axios";
import Grid from '@mui/material/Grid';
import MyLoading from "./MyLoading";

import MyPrimary from "./MyPrimary";

export default function App() {
  const [id, setId] = useState(1);

  const [total, setTotal] = useState(0);

  const [items, setItems] = useState([]);

  const [boughtItems, setboughtItems] = useState([]);
  const [ignoredItems, setIgnoredItems] = useState([]);
  const [totalItems, setTotalItems] = useState([]);


  const [loading, setLoading] = useState(true);

  const getNextItem = (item) => {
    //Ignore
    setId(id + 1);
    /*Axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setItem(response.data.title))
      .then(setId(id + 1));*/
    setIgnoredItems([...ignoredItems, item]);
    setTotalItems([...totalItems, item]);
  };
  const getPreviousItem = (item) => {
    //Buy
    setId(id + 1);
    setTotal(total + item.price);
    /*Axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setItem(response.data.title))
      .then(setId(id - 1));*/
    setboughtItems([...boughtItems, item]);
    setTotalItems([...totalItems, item]);
  };

  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products`).then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) return (
    <MyLoading />
  );

  return (
    <>
      {items.map((item) =>
        item.id === id ? (
          <MyPrimary total={total} item={item} getPreviousItem={getPreviousItem} getNextItem={getNextItem} boughtItems={boughtItems} ignoredItems={ignoredItems} totalItems={totalItems} />
        ) : null
      )}
    </>
  );
}