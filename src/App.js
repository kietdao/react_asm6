import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './pages/login'
import ProductList from './pages/products'
import Navigation from './components/Navigation';
import ProductDetail from './pages/productdetail';
import Cart from './pages/cart'
import './App.css';


function App() {
  const productId = useSelector((state) => state.products.productId)
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProductList />} />
        <Route path='/products' element={<ProductList />} />
        <Route path={`/product/:id`} element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
