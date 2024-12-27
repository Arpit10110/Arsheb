import React,{useEffect} from 'react'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const CartItem = ({Cart,deleteItem,decreaseQty,increseQty}) => {
    return (
        <>
        <div className="buycart-maindiv">
        {
               Cart.length === 0? <>
               <h2>No Item in Cart</h2>
               </>:
               <>
               {Cart.map((i) => (
                    <div className='cart-section2-item' key={i.id}>
                      <div className="cart-item-img">
                        <img src={i.img} alt={i.title} />
                      </div>
                      <div className="cart-item-cont">
                        <h4>{i.title}</h4>
                        <h4>₹{Math.floor(i.price)}</h4>
                        <div className="cart-controller">
                            <div className="cart-qty">
                            <button onClick={() => increseQty(i.id)} >+</button>
                                <h5>{i.qty}</h5>
                              <button onClick={() => decreaseQty(i.id)} >-</button>
                            </div>
                            <button onClick={() => deleteItem(i.id)} className='cart-delete-btn' ><DeleteIcon className='cart-delete-icon' /></button>
                        </div>
                      </div>
                    </div>
                  ))}
               </>
        }
        </div>
        </>
      )
}

export default CartItem
