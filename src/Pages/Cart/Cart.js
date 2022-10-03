import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { context } from "../../Constant";
import "./Cart.css";


function Cart() {
  
  const value = useContext(context);

  const handleRemove = (e) => {
    value.removeItem(e)
  }

  // const a = value.stock.findIndex((e) => e!==0)
  // const aa = a+ 1;

    return (
    <>
    <div>

    </div>
    <div className="cart_container">
      
      <div>
        <ul>
          {value.items.map((e, key) => (
            <>
              <li key={key} className="list_cart">
                <div className="Cart_values">
                  <img className="cart_image" src={e.images[0]} alt="" />
                  <div>
                    <h3 className="title">{e.title}</h3>
                    <p className="description">{e.description}</p>
                      <h3 className="quantity_item">Quantity: {e.quan}</h3>
                  </div>
                  <h4>${e.price}</h4>
                 
                </div>
                <div className="action_cart">
                  <button onClick={() => value.addItem(e)}>+</button>
                  <button onClick={() => handleRemove(e.id)}>-</button>
                </div>
              </li>
              <hr></hr>
            </>
          ))}
        </ul>
      </div>
      <div className="total_container">
        <h3>Total Amount ({value.quantity ? value.quantity : 0} items)</h3>
        <h3>${value.totalAmount ? value.totalAmount : 0}</h3>
      </div>
    </div>
   {/* <NavLink  to={{
     pathname: "/cart/checkout"
   }}
   reloadDocument ={false}
        state ={value} 
        style={{textDecoration: "none"}}> */}
        
   <div className="checkout">
   <Link
                    to= "/cart/checkout"
                    style={{ textDecoration: "none" }}>
      <button className="buttonCheckout" onSubmit={(e) => e.preventDefault()}>Proceed to Checkout</button>
      </Link>
    </div>
    </>
  );
}

export default Cart;
