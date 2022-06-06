import React from 'react'
import { Image, Card, InputNumber, Button } from 'antd';
import './productdetail.scss'

const { Meta } = Card;

export default function ProductDetail() {
  return (
    <div className='product_detail'>
       <Card title={`Tên Món: A1`} bordered={false} style={{ width: `50%` }}>
         <Image 
          style={{width: `50%`}}
          src='https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg'
         />
          <p><span>Loại đồ uống: </span>Cocktail</p>
          <p><span>Nguyên liệu: </span>Gin, Grand Marnier, Lemon Juice, Grenadine</p>
          <p><span>Quy trình pha chế: </span>Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.</p>
          <p><span>Ly đựng: </span>Cocktail glass</p>
          <div className='actions'>
            <p><span>Số lượng: </span><InputNumber min={1} max={10}/></p>
            <Button type='primary'>Thêm vào giỏ hàng</Button>
          </div>
        </Card>
    </div>
  )
}
