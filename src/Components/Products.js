import React,{useState} from 'react'
import {Button, Container, Row,Col} from 'react-bootstrap'
import formatCurrency from '../utill'
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal/lib/components/Modal';
import { Zoom } from 'react-reveal';
export default function Products({products,addToCart}) {
    const [modal, setModal] = useState({product:null});

    const openModal=(product)=>{
        setModal({product})
    }

    const closemodal=()=>{
        setModal({product:null})
    }

    const {product}=modal
    return (
        <div>
           
            <Container >
            <Fade bottom cascade >
                <Row>
             
                {products.map((product)=>(
                    
                        <Col md="3" className='p-2 m-3'  key={product._id}>
                            
                            <div className='product'>
                                <a href='#' onClick={()=>openModal(product)}>
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
                {
                    product &&(
                      <Modal isOpen={true} onRequestClose={closemodal}>
                          <Zoom>
                              <div>
                                  <div>
                                  <button className='close-btn' onClick={closemodal}>X</button>
                                  </div>
                                 <Container>
                                     <Row>
                                         <div className='d-flex'>
                                         <div >
                                            <img src={product.image} alt={product.title}/>
                                         </div>

                                         <div className='p-3'>
                                             <p className=''><h3> {product.title}</h3></p>

                                             <p className='p-2'>{product.description}</p>
                                             <p className=''>
                                                 Avaiable Size :{' '}
                                                 {product.availableSizes.map((x)=>(
                                                     <span>
                                                         {' '}
                                                         <Button variant="success"> {x}</Button>
                                                     </span>
                                                 ))}
                                             </p>
                                             <div>
                                                 <div><h3>Price:{formatCurrency(product.price)}</h3></div>
                                                 <div>
                                                 <Button variant="success"
                                                  onClick={()=>{
                                                    addToCart(product);

                                                    closemodal()
                                                  } }

                                                  > Add To CArt</Button>
                                                 </div>
                                             </div>
                                         </div>
                                         </div>
                                     </Row>

                                 </Container>
                              </div>
                          </Zoom>
                      </Modal>      
                    )
                }
           </Container>
            
        </div>
    )
}
