import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

import './navigation.scss'

export default function Navigation() {
  const numberItem = useSelector((state) => state.cart?.numberItems)
  const navigate = useNavigate()
  return (
    <div className='navigation'>
      <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
        <Menu.Item key="product_list" onClick={() => navigate('/products')}>
          Product List
        </Menu.Item>  
        <Menu.Item key="cart" onClick={() => navigate('/cart')}>
          Cart ({numberItem ? numberItem : 0})
        </Menu.Item>  
      </Menu>
    </div>
   
  )
}
