import React,{useState} from 'react'
import CartMovie from './CartMovie';
import {GlobalProvider} from '../context/GlobalState'
import {InputGroup,Button,FormControl,Container,Row,Col} from 'react-bootstrap'
function Add() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([])
    const inputHandler = e=>{
        e.preventDefault()
        setInput(e.target.value)
        
          fetch(`https://imdb-api.com/en/API/SearchMovie/k_muuzob39/${e.target.value}`)
    .then(res=>res.json())
    .then((data)=> {
        console.log(data);
        if(!data.errors){
        setResult(data.results)
        }else{
        setResult([])
        }
        } )
    }
    
    return (
        <GlobalProvider>
        <Container>
            <Row>
                <Col md={12}>
                <InputGroup className="mb-3">
                    <FormControl className="mt-3"
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder="search movie"
                    value={input}
                    onChange={inputHandler}
                    />
             </InputGroup> 
                </Col>
       
            </Row>
            
              
                
                { (<ul> <Row> {result.map((res)=> 
                <Col md={6}>
                    <li key={res.id}> <CartMovie movie={res}/></li>
                </Col>)} </Row> </ul>)
                
                }
                        
                   
              
            
    
        </Container>
        </GlobalProvider>
    )
}

export default Add
