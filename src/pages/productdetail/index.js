import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Card, InputNumber, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import axios from 'axios';
import './productdetail.scss'


const { Meta } = Card;

export default function ProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const productId = useSelector((state) => state.products.productId) || id
  const [productDetail, setProductDetail] = useState(null)
  const [ingredientList, setIngredientList] = useState(null)
  const [cartData, setCartData] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    async function getProductDetail() {
      try{
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${productId}`)
        const ingredients = []
        let ingredient = ''
        for(let i = 1; i < 16; i++) {
          if(res.data.drinks[0][`strIngredient${i}`] !== null) {
            ingredient = res.data.drinks[0][`strIngredient${i}`]
            ingredients.push(ingredient)
          }
        }
        const {strDrink, strCategory, strDrinkThumb, idDrink} = res.data.drinks[0]
        const dataSendToCart = {
          key: idDrink,
          name: strDrink,
          type: strCategory,
          photo: strDrinkThumb,
        }
        setCartData(dataSendToCart)
        setIngredientList(ingredients)
        setProductDetail(res.data.drinks[0])
      }catch(error) {
        console.log(error)
      }
    }
    getProductDetail()
  }, [])

  const handleQuantityChange = function (value) {
    setQuantity(value)
  }

  return (
    <div className='product_detail'>
       <Card title={`Tên Món: ${productDetail?.strDrink}`} bordered={false} style={{ width: `50%` }}>
         <Image 
          style={{width: `50%`}}
          src={`${productDetail?.strDrinkThumb}`}
         />
          <p><span>Loại đồ uống: </span>{productDetail?.strCategory}</p>
          <p><span>Nguyên liệu: </span>
            {ingredientList !== null ? ingredientList.join(', ') : ''}
          </p>
          <p><span>Quy trình pha chế: </span>{productDetail?.strInstructions}</p>
          <p><span>Ly đựng: </span>{productDetail?.strGlass}</p>
          <div className='actions'>
            <p><span>Số lượng: </span><InputNumber min={1} max={10} onChange={handleQuantityChange}/></p>
            <Button type='primary' onClick={() => dispatch(addToCart({...cartData, quantity}))}>Thêm vào giỏ hàng</Button>
          </div>
        </Card>
    </div>
  )
}
