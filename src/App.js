import './App.css';
import Header from './Pages/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Products from './Pages/Product/Products';
import Cart from './Pages/Cart/Cart';
import EachProduct from './Component/EachProduct/EachProduct';
import {context} from './Constant'
import { useReducer } from 'react';


const initialState = {
  items: [],
  amount: 0,
  quantity: 0
}

const reducer = (state, action) => {
  if(action.type === "Add")
  {
    return {
      ...state,
      items: [...state.items, action.item],
      quantity: state.items.length+ 1,
      amount: state.amount + action.item.price
    }
  }
  else if(action.type === "Remove")
  {
    const updatedRemovedItems = state.items.filter((e) => e.id !== action.id)
    const amountUpdation = state.items.filter((e) => e.id === action.id)
    console.log(amountUpdation)
    console.log(updatedRemovedItems)
    return {
      ...state,
      items: updatedRemovedItems,
      quantity: state.items.length - 1,
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
    quantity: data.quantity
  }


  return (
   <>
    <context.Provider value = {value}>
    <Header />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="products" element={<EachProduct />}></Route>
      </Routes>
    </context.Provider>
    </>
  );

}

export default App;
