import React,{useState,useContext} from 'react'
import { Container ,Row} from 'react-bootstrap'
import './App.css'
import CartItem from './Components/CartItem';
import Products from './Components/Products';
import data from './data.json'
import Filter from './Filter';

class App extends React.Component  {
constructor(props){
  super(props);
  this.state={
    products:data.products,
    size:"",
    sort:"",
    cartItem:[]
  }
  this.sortProducts=this.sortProducts.bind(this)
}

removeFromCart =(product)=>{
  const cartItems=this.state.cartItem.slice();
  this.setState({
    cartItem:cartItems.filter((x)=>x._id !== product._id)
  })
}

addToCart=(product)=>{
const cartItems=this.state.cartItem.slice();

let alreadyInCart=false;

cartItems.forEach((item)=>{
    //if exact product incresses counnt
    if(item._id === product._id){
      item.count++;
      alreadyInCart=true;

    }
});
  //if not exact product push product in cartitems and counnt:1
  if(!alreadyInCart){
    cartItems.push({...product,count:1});
  }
  this.setState({cartItem:cartItems})
}
sortProducts(evn){
  //imp
  const sort=evn.target.value;

  console.log(evn.target.value);

   this.setState((state)=>({
     sort:sort,
     products:this.state.products.slice().sort((a,b)=>(
       sort ==="Lowest"?

        ((a.price >b.price)? 1:-1):

       sort ==="heighest"?

        ((a.price <b.price) ? 1:-1):
       ((a._id <b._id) ? 1:-1)
       
     ))
   }))
}
filterProducts=(evn)=>{
  //imp
  console.log(evn.target.value);
  if(evn.target.value ===""){
    this.setState({size:evn.target.value,products:data.products})
  }else{
    this.setState({
      size:evn.target.value,
      products:data.products.filter(
        product=>product.availableSizes.indexOf(evn.target.value)>=0)
    })
  }


}
render(){
 
  return (
    <div className="app">
 
    <Container fluid>
      <Row>
        <header className='p-3'> <a href='#'> React shopp Cart</a></header>
        <main> 
          <div className='main'>

            <Filter
             count={this.state.products.length}
             size={this.state.size}
             sort={this.state.sort}
             filterProducts={this.filterProducts}
             sortProducts={this.sortProducts}

             ></Filter>
          
            <Products products={this.state.products} addToCart={(product)=>this.addToCart(product)}/> 
            </div>

          <div className='sidebar '><CartItem  CartItem={this.state.cartItem} removeFromCart={this.removeFromCart}/></div>

        
        </main>
        <footer className='p-3 text-center'> <p>All right reservered</p></footer>
      </Row>
    </Container>
      

    </div>


  )
}
}
export default App
