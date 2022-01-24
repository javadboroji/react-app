import React from 'react';
import {Button} from 'react-bootstrap'
import formatCurrency from '../utill';
export default function CartItem({CartItem,removeFromCart}) {
  return<div className='cart-item-main'> <div className='cartitem-header'>
      {CartItem.length ===0 ?(<div> Cart is empty</div>)
      :
     (<div> You have {CartItem.length}in the Cart {" "} </div>)}
      </div>
     <div className='cart'>
       <ul className='cart-items'>
         {CartItem.map((item)=>(
           <li key={item._id} className='item'>
             <div className='cart-img d-flex'>
               <img src={item.image} alt={item.title}></img>
               <h6 className='m-auto'> {item.title}</h6>
             </div>
             
             <div className='d-flex p-2'>
             <div className='mt-auto mb-auto '> {formatCurrency(item.price)} X {item.count}{' '}</div>

             <Button  className='m-auto' variant="danger" onClick={()=>removeFromCart(item)}> Remove </Button>{' '}
             </div>
          
             
           </li>
         ))}
       </ul>
       {CartItem.length !==0 &&(
           <div className='cart m-auto'>
           <div className='totla'>
            <h3 className='text-center '> Totla:{" "} {formatCurrency(CartItem.reduce((a,c)=> a +c.price * c.count,0))}{' '}</h3> 
            <Button  className='m-auto d-block' variant="success" size="lg" > Proceed </Button>{' '}
           </div>
          
        </div>
       )}
      
     </div>
  </div>
}
