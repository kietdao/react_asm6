import React from 'react'
import { Alert, Spin } from 'antd';
import { useSelector } from 'react-redux';

import './localloading.scss'

export default function LocalLoading() {
  const isLoaded = useSelector((state) => state.products.isProductLoaded)  
  if(isLoaded === false){
  return (
    <div className='loading'>
        <Spin tip="Loading...">
        </Spin>
    </div>
  )
  }
  return null
}
