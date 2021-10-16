import React,{useContext} from 'react'
import{ Container, Row ,Col, Button} from 'react-bootstrap'
import{GlobalContext}from '../context/GlobalState'
import MovieCart from './MovieCart'
function WhatchList() {
    const{watchlist}=useContext(GlobalContext)
    return (
     <Container>
         <Row>
            
                 {watchlist.length>0? (
                      watchlist.map((movie)=>(
                        <Col md={4}>
                            <MovieCart key={movie.id} movie={movie} type="watchlist" /> 
                       </Col>
                  )
                )
                ):(<h2> Not Found</h2>)}
                
             
         </Row>
     </Container>
          
        
    )
}

export default WhatchList
