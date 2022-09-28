import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { context } from "../../Constant";
import Card from "../Card/Card";
import './EachProduct.css'

function EachProduct() {
  const selct = useSelector((state) => state.reducers.state);

  const value = useContext(context)

  // const handleCard = (e) => {
    
  // }

  const handleAdd = (e) => {
    value.addItem((e))
  }
  return (
    <>
      <div  style={{ display: "flex", flexWrap: "wrap", marginTop: "5%" }}>
        {selct ? (
          selct.map((e) => {
            return (
              <Card >
                <div style={{ marginBottom: "30px" }}>
                  <img className="product_image" src={e.images[0]} alt="" />
                </div>
                <div className="data_price">
                  <span>{e.brand}</span>
                  <span>${e.price}</span>
                </div>
              <div className="actions">
              <button onClick={() => handleAdd(e)}>+</button>
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
