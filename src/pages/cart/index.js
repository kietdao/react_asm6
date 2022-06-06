import { useState, useEffect } from 'react'
import { Table, Space, Button, InputNumber } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './cart.scss'

export default function Cart() {
  let i = 1
  const [cartList,setCartList] = useState([])
  const cartData = useSelector((state) => state.cart.cart)

  useEffect(() => {
    async function getCartData() {
      try {
        const data = cartData.map((drink) => {
          return {
            name: drink.name,
            type: drink.type,
            quantity: drink.quantity,
            key: drink.key,
          }
        }) 
        setCartList(data)
      } catch(error) {
        console.log(error)
      }
    }
    getCartData()
  }, [])

  const columns = [
    {
      title: 'STT',
      render: () => i++,
    },
    {
      title: 'Tên món',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Loại đồ uống',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity) => (
        <InputNumber min={1} max={10} placeholder={quantity}/>
      )
    },
    {
      title: 'Hủy món',
      key: 'deleteFromCart',
      render: (key) => (
        <Space size="middle">
          <Button type='danger'>Xoá món</Button>
        </Space>
      ),
    },
  ];
  return (
    <div className='cart_list'>
      <h2>Order List</h2>
       <Table columns={columns} dataSource={cartList !== [] ? cartList : []} />
    </div>
  )
}
