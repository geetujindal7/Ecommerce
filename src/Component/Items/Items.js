import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Items.css";

function Items({ allData, images }) {
  const categories = allData.map((e) => e.category);
  const catogoriesSet = ["All", ...new Set(categories)];

  const dispatch = useDispatch();
  const handleItems = (e) => {
   dispatch({type: "FILTERED", data: allData, clicked: catogoriesSet[e]})
   
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "5%" }}>
        {images.map((e, key) => {
          return (
            <div className="item_container" key = {key}>
             <NavLink to={"/detail"} onClick={() => handleItems(key)}> <img className="image_container"  src={e.image} alt="" /></NavLink>
              <div className="image_title">{catogoriesSet[key]}</div>
            </div>
          );
        })}
      </div>

      <div></div>
    
    </>
  );
}

export default Items;

