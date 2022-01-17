import React,{useState,useContext} from 'react'
import { Container ,Row} from 'react-bootstrap'
import './App.css'
import Products from './Components/Products';
import data from './data.json'

class App extends React.Component  {
constructor(){
  super();
  this.state={
    products:data.products,
    size:""
  }
}
render(){
 
  return (
    <div className="app">
 
    <Container fluid>
      <Row>
        <header className='p-3'> <a href='#'> React shopp Cart</a></header>
        <main> 
          <div className='main'><Products products={this.state.products}/></div>
          <div className='sidebar '>CartItem</div>

        
        </main>
        <footer className='p-3 text-center'> <p>All right reservered</p></footer>
      </Row>
    </Container>
      

    </div>


  )
}
}
export default App