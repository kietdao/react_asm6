import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Table, Tag, Space, Image, InputNumber } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { getCocktailList } from '../../features/products/productsSlice'
import { addToCart } from '../../features/cart/cartSlice'
import axios from 'axios';
import './products.scss'



export default function Products() {
  let i = 1
  const [cocktailData,setCocktailData] = useState([])
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    async function getCocktailInfo() {
      try {
        const response = await getCocktailData()
        const data = response.data.drinks.map((drink) => {
          return {
            key: drink.idDrink,
            name: drink.strDrink,
            type: drink.strCategory,
            photo: drink.strDrinkThumb
          }
        }) 
        setCocktailData(data)
        dispatch(getCocktailList(data))
      } catch(error) {
        console.log(error)
      }
    }
    getCocktailInfo()
  }, [])

  const getCocktailData = function () {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
  }

  const handleQuantityChange = function (value) {
    setQuantity(value)
  }

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
      title: 'Hình Ảnh',
      dataIndex: 'photo',
      key: 'photo',
      render: (photo) => (
        <Image
          width={200}
          src={photo}  
        />
      )
    },
    {
      title: 'Thêm vào giỏ hàng',
      key: 'addToCart',
      render: (key) => (
        <Space size="middle">
          <span>Số lượng:</span>
          <InputNumber min={1} max={10} onChange={handleQuantityChange} /> 
          <PlusSquareOutlined onClick={() => {dispatch(addToCart({...key, quantity}))}}/>
        </Space>
      ),
    },
  ];
  return (
 
    <div className='product_list'>
      <h2>Cooktail List</h2>
       <Table columns={columns} dataSource={cocktailData !== [] ? cocktailData : []} />
    </div>
  )
}
