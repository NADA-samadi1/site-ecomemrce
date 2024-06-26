import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export default function Breadcrum(props) {
    const {product}=props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" srcset="" /> SHOP <img src={arrow_icon} alt="" srcset="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

