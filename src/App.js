import './App.css';
import Header from './Pages/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Products from './Pages/Product/Products';
import Cart from './Pages/Cart/Cart';
import EachProduct from './Component/EachProduct/EachProduct';

function App() {
  return (
   <>
    <Header />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="detail" element={<EachProduct />}></Route>
      </Routes>
    </>
  );

}

export default App;
