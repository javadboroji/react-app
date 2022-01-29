import React,{useState} from 'react';
import {Button} from 'react-bootstrap'
import formatCurrency from '../utill';
import Fade from 'react-reveal/Fade';


export default function CartItem({CartItem,removeFromCart}) {

    const [checkout, setCheckout] = useState(false);
    const [input, setInput] = useState({user:'',email:'',address:''});



    const handlerInput=(e)=>{
      setInput({[e.target.name]:e.target.vaule})
    }


    const creatOrder=(e)=>{

      e.preventDefault();

      const order={
        user:input.user,
        email:input.email,
        address:input.address,
        cartItems:CartItem
      }

      creatOrder(order)

    }


  return<div className='cart-item-main'>
  
     <div className='cartitem-header'>

        {CartItem.length ===0 ?(<div> Cart is empty</div>)
         :
     (<div> You have {CartItem.length}in the Cart {" "} </div>)}
      </div>
     <div className='cart'>
       <Fade left cascade>
       <ul className='cart-items'>

         {CartItem.map((item)=>(

           <li key={item._id} className='item'>

            <div className='cart-img d-flex'>

                <img src={item.image} alt={item.title}></img>

                <h6 className='m-auto'> {item.title}</h6>

            </div>
             
             <div className='d-flex p-2'>

              <div className='mt-auto mb-auto '>
                  {formatCurrency(item.price)} X {item.count}{' '}
                </div>

                <Button  
                  className='m-auto' 
                  variant="danger" 
                  onClick={()=>removeFromCart(item)}> Remove 
                </Button>{' '}
             </div>
          
             
           </li>
         ))}
       </ul>
       </Fade>
       {CartItem.length !==0 &&(
         <>
           <div className='cart m-auto'>
           <div className='totla'>
            <h3 className='text-center '> Totla:{" "} {formatCurrency(CartItem.reduce((a,c)=> a +c.price * c.count,0))}{' '}</h3> 
            <Button  
            className='m-auto d-block'
             variant="success"
              size="lg"
              onClick={()=>{setCheckout(! checkout)}}
               > Proceed </Button>{' '}
           </div>
          
        </div>
        {checkout &&( <form onSubmit={creatOrder}>
          <Fade right>
            <ul className='form-inp'>
              <li>
                <label> Email</label>{' '}
                <input name='email' type='email' onChange={handlerInput} required/>
              </li>

              <li>
                <label> Name</label>{' '}
                <input name='user' type='text' onChange={handlerInput} required/>
              </li>

              <li>
                <label> Address</label>{' '}
                <input name='address' type='text' onChange={handlerInput} required/>
              </li>
              <li>
              <Button  
                 className='m-auto'
                 variant="success"
                 type='submit'
               > 
                 Checkout
                </Button>{' '}
              </li>
            </ul>
            </Fade>
        </form>)}
        </>
       )}
      
     </div>
  </div>
}
