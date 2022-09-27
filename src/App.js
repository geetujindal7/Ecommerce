import './App.css';
import Header from './Pages/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Products from './Pages/Product/Products';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
   <>
    <Header />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </>
  );

}

export default App;
