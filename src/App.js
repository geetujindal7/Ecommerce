import './App.css';
import Header from './Pages/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Products from './Pages/Product/Products';
import Cart from './Pages/Cart/Cart';
import EachProduct from './Component/EachProduct/EachProduct';
import {context} from './Constant'
import { useReducer } from 'react';
import ItemProduct from './Component/ItemProduct/ItemProduct';


const initialState = {
  items: [],
  amount: 0,
  quantity: 0,
}

const reducer = (state, action) => {


  if(action.type === "Add")
  {
    const present = state.items?.findIndex((e) => e.id === action.item.id)
   

    if(present !== -1)
    {
      return {
        ...state,
      items: [...state.items],
      quantity: state.quantity + 1,
      amount: state.amount + action.item.price,
    
    }
  }

    else{
    return {
      ...state,
      items: [...state.items, action.item],
      quantity: state.quantity + 1,
      amount: state.amount + action.item.price,
    }
  }
  }
  else if(action.type === "Remove")
  {
    const updatedRemovedItems = state.items.filter((e) => e.id !== action.id)
    const amountUpdation = state.items.filter((e) => e.id === action.id)
    return {
      ...state,
      items: updatedRemovedItems,
      quantity: state.quantity - 1,
      amount: state.amount  - amountUpdation[0].price
    }
  }
  return state
}

function App() {

  const [data, dispatch] = useReducer(reducer, initialState)
  const value = {
    addItem: (item) => {
      dispatch({type: "Add", item: item})
    },
    items: data.items,
    removeItem: (id) => {
      dispatch({type:"Remove", id: id})
    },
    totalAmount: data.amount,
    quantity: data.quantity,
    stock: data.stock
  }

  return (
   <>
    <context.Provider value = {value}>
    <Header />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="products" element={<EachProduct />}></Route>
        <Route exact path="products/item" element={<ItemProduct />}></Route>
      </Routes>
    </context.Provider>
    </>
  );

}

export default App;
