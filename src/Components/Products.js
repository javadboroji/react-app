import React from 'react'
import {Button, Container, Row,Col} from 'react-bootstrap'
import formatCurrency from '../utill'
import Fade from 'react-reveal/Fade';

export default function Products({products,addToCart}) {
    return (
        <div>
            <Container >
            <Fade bottom >
                <Row>
             
                {products.map((product)=>(
                    
                        <Col md="3" className='p-2 m-3'  key={product._id}>
                            
                            <div className='product'>
                                <a href='#'>
                                    <img className='image' src={product.image} alt={product.title}/>
                                    <p className='text-center p-2'>{product.title}</p>
                                </a>
                            </div>
                            <div className='d-flex justify-content-between p-1'>
                                <div className='price'> {formatCurrency( product.price)}</div>
                                <Button variant="success" onClick={()=>addToCart(product)}>Add To Cart</Button>{' '}
                            </div>
                        </Col>
                 
                    )
                )}
                </Row>
                </Fade>
           </Container>
            
        </div>
    )
}
