import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

function EachProduct() {
  const selct = useSelector((state) => state.reducers.state);
  console.log(selct);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "5%" }}>
        {selct ? (
          selct.map((e) => {
            return (
              <Card>
                <div style={{ marginBottom: "30px" }}>
                  <img className="product_image" src={e.images[0]} alt="" />
                </div>
                <div className="data_price">
                  <span>{e.brand}</span>
                  <span>${e.price}</span>
                </div>
              <div>
              <button className="">+</button>
                <button>-</button>
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
