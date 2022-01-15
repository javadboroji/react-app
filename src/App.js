import React,{useState,useContext} from 'react'
import { Container ,Row} from 'react-bootstrap'
import './App.css'


export default function App() {


  return (
    <div className="app">
 
    <Container fluid>
      <Row>
        <header className='p-3'> <a href='#'> React shopp Cart</a></header>
        <main> product list</main>
        <footer className='p-3 text-center'> <p>All right reservered</p></footer>
      </Row>
    </Container>
      

    </div>


  )
}
