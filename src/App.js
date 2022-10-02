import "./App.css";
import Header from "./Pages/Header/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Product/Products";
import Cart from "./Pages/Cart/Cart";
import EachProduct from "./Component/EachProduct/EachProduct";
import { context } from "./Constant";
import { useEffect, useReducer, useState } from "react";
import ItemProduct from "./Component/ItemProduct/ItemProduct";
import Login from "./Pages/Login/Login";

const initialState = {
  items:
    JSON.parse(localStorage.getItem("items")) == null
      ? []
      : JSON.parse(localStorage.getItem("items")),
  amount:
    Number(localStorage.getItem("amount")) == null
      ? 0
      : Number(localStorage.getItem("amount")),
  quantity:
    Number(localStorage.getItem("quantity")) == null
      ? 0
      : Number(localStorage.getItem("quantity")),
};

const reducer = (state, action) => {
  if (action.type === "Add") {
    const present = state.items?.findIndex((e) => e.id === action.item.id);
    const existingCart = state.items[present];
    let items;
    if (present !== -1) {
      //state.items[present].quan = state.items[present].quan + 1
      let updatedItems = {
        ...existingCart,
        quan: existingCart.quan + 1,
      };
      items = [...state.items];
      items[present] = updatedItems;
      return {
        ...state,
        items: items,
        quantity: state.quantity + 1,
        amount: state.amount + action.item.price,
      };
    } else {
      return {
        ...state,
        items: [...state.items, action.item],
        quantity: state.quantity + 1,
        amount: state.amount + action.item.price,
      };
    }
  } else if (action.type === "Remove") {
    const updatedRemovedItems = state.items.filter((e) => e.id !== action.id);
    const amountUpdation = state.items.filter((e) => e.id === action.id);

    const present = state.items?.findIndex((e) => e.id === action.id);
    const existingCart = state.items[present];

    let updatedItems;

    if (existingCart) {
      let updatedItem = {
        ...existingCart,
        quan: existingCart.quan - 1,
      };

      updatedItems = [...state.items];
      updatedItems[present] = updatedItem;

      if (existingCart.quan <= 1) {
        let upd = state.items.filter((e) => e.id !== action.id);
        console.log(upd);
        return {
          ...state,
          items: upd,
          quantity: state.quantity - 1,
          amount: state.amount - amountUpdation[0].price,
        };
      }

      return {
        ...state,
        items: updatedItems,
        quantity: state.quantity - 1,
        amount: state.amount - amountUpdation[0].price,
      };
    }

    return {
      ...state,
      items: updatedRemovedItems,
      quantity: state.quantity - 1,
      amount: state.amount - amountUpdation[0].price,
    };
  }
  return state;
};

// const getLocalItems = () => {

//   let list = localStorage.getItem('data')
//     console.log(list)

//     if(list) {
//       return JSON.parse(localStorage.getItem('data'))
//     }
//     else {
//       return [];
//     }
// }
function App() {
  const [data, dispatch] = useReducer(reducer, initialState);
  const [isLogin, setIsLogin] = useState(false);
  const value = {
    addItem: (item) => {
      dispatch({ type: "Add", item: item });
    },
    items: data.items,
    removeItem: (id) => {
      dispatch({ type: "Remove", id: id });
    },
    totalAmount: data.amount,
    quantity: data.quantity,
    stock: data.stock,
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data.items));
    localStorage.setItem("amount", JSON.stringify(data.amount));
    localStorage.setItem("quantity", JSON.stringify(data.quantity));
  }, [data]);
  return (
    <>
      {/* <Routes>
     <Route exact path = '/' element={<Login />}></Route>
     </Routes> */}
     {isLogin ? 
    ( <context.Provider value = {value}>
    <Header />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="products" element={<EachProduct />}></Route>
        <Route exact path="products/:id" element={<ItemProduct />}></Route>
      </Routes>
    </context.Provider> ) :
    (<Routes >
      <Route path='/' element={<Login setIsLogin={setIsLogin}/>} ></Route>
    </Routes>) 
     }
    </>
  );
}

export default App;
