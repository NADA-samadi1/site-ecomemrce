import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

export default function Items(props) {
  return (
    <div className='item'>
    <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
    <p>{props.name}</p>
    <div className="item-prices">
        <div className="item-prices-new">
            MAD{props.new_price}
        </div>
        <div className="item-prices-old">
            MAD{props.old_price}
        </div>
    </div>
</div>
  )
}
