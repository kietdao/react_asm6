import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './pages/login'
import ProductList from './pages/products'
import Navigation from './components/Navigation';
import ProductDetail from './pages/productdetail';
import AuthRoute from './components/authroute'
import PrivateRoute from './components/privateroute'
import LocalLoading from './components/LocalLoading';
import Cart from './pages/cart'
import './App.css';

localStorage.setItem('userList',JSON.stringify([{username: 'admin', password: 'admin'}]))
localStorage.setItem('isProductListLoaded',JSON.stringify(false))

function App() {
  const productId = useSelector((state) => state.products.productId)
  return (
    <div className="App">
      <Navigation />
      <Routes path='*'>
        <Route path='/login' element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        } />
        <Route path='/' element={
          <PrivateRoute>
            <LocalLoading />
            <ProductList />
          </PrivateRoute>
          } />
        <Route path='/products' element={          
          <PrivateRoute>
            <LocalLoading />
            <ProductList />
          </PrivateRoute>} />
        <Route path={`/product/:id`} element={
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        } />
        <Route path='/cart' element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
