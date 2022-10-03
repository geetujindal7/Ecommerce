import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { context } from "../../Constant";
import Card from "../Card/Card";
import "./EachProduct.css";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

function EachProduct() {
  var selct = useSelector((state) => state.reducers.data);
  const value = useContext(context);
  const [data, setData] = useState(selct);
  const [values, setValue] = useState("");

  const handleSort = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (values === "Price - low to high") {
      const sorted = [...data].sort((a, b) => a.price - b.price);
      setData(sorted);
    }
    if (values === "Price - high to low") {
      const sorted = [...data].sort((a, b) => b.price - a.price);
      setData(sorted);
    }
    if (values === "Discount") {
      const sorted = [...data].sort(
        (a, b) => b.discountPercentage - a.discountPercentage
      );
      setData(sorted);
    }
    if (values === "Customer Rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setData(sorted);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

    

  const handleAdd = (e) => {
    value.addItem(e);
  };

  return (
    <>
      <select
        onChange={handleSort}
        className="dropdown_sort">
           <option >Sort</option>  
        <option value= "Price - high to low">Price - high to low</option>  
        <option value= "Price - low to high"> Price - low to high  </option>
        <option value= "Discount"> Discount </option>
        <option value= "Customer Rating"> Customer Rating </option>
  </select>
      
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "5%" }}>
        {data ? (
          data.map((e) => {
            return (
              <Card>
                <div>
                  <Link
                    to={{
                      pathname: `/products/${e.brand}`,
                    }}
                    state={{ value: e }}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ marginBottom: "30px" }}>
                      <img className="product_image" src={e.images[0]} alt="" />
                    </div>
                  </Link>
                  <div className="rating">
                    <Rating ratingValue={e.rating * 20} />
                    {e.rating}/5
                  </div>
                  <div className="data_price">
                    <span>{e.brand}</span>
                    <span>${e.price}</span>
                  </div>
                  <div className="discountPercentage">
                    ({e.discountPercentage}% discount)
                  </div>
                  <div className="actions">
                    <button
                      className="action_button"
                      onClick={() => handleAdd(e)}
                    >
                      +
                    </button>
                    <button className="action_button">-</button>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <h1>Please Try Again </h1>
        )}
      </div>
    </>
  );
}

export default EachProduct;
