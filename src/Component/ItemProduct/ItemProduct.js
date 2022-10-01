/* eslint-disable no-loop-func */
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { context } from "../../Constant";
import "./ItemProduct.css";

function ItemProduct(props) {
  let location = useLocation();
  const contet = useContext(context)
  const values = location.state.value;
  console.log(values);
  const [image, setImage] = useState(0);

  const handlePrevImage = () => {
    const isFirstSlide = image === 0;
    const next = isFirstSlide ? values.images.length - 1 : image - 1;
    console.log(next);
    setImage(next);
  };

  const handleNextImage = () => {
    const isFirstSlide = image === values.images.length - 1;
    const next = isFirstSlide ? 0 : image + 1;
    setImage(next);
  };

  return (
    <>
      <div className="Product_item_container">
        <div className="Container_items">
          <div className="image_container_b">
            <img
              className="previousIcon"
              onClick={handlePrevImage}
              src="https://img.icons8.com/color/344/sort-left.png"
              alt=""
            />
            <img className="product_images" src={values.images[image]} alt="" />
            <img
              className="nexticon"
              onClick={handleNextImage}
              src="https://img.icons8.com/color/344/sort-right.png"
              alt=""
            />
          </div>
          <div className="details_items">
            <h1>{values.brand}</h1>
            <h5 className="values_title">{values.title}</h5>
            <p className="desc_values">{values.description}</p>
            <h1 className="price_items">M.R.P - {values.price}$</h1>
            <div style={{display: "flex"}}>
              <div className="card_rating_disc">
                  {values.rating} Rating
              </div>
              <div className="card_rating_disc">
                  {values.discountPercentage}% Off
              </div>
            </div>
            <button className="addButton" onClick={() => contet.addItem(values)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemProduct;
