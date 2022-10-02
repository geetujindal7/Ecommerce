import React, { useEffect, useState } from "react";
import axios from "axios";
import Items from "../../Component/Items/Items";
import "../Header/Header.css";
import { images } from "../../Constant";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://dummyjson.com/products`).then((data) => {
      const arrWithColor = data.data.products.map(object => {
        return {...object, quan: 1};
      });
      setData(arrWithColor)
      setLoading(false);
    });
   
  }, []);

  console.log(data)
  return (
    <>
      {loading ? (
        <>
          <h1 className="loading">Loading...</h1>
        </>
      ) : (
        <div>
          <div>
            <Items allData={data} images={images} />
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
