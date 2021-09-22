import React from 'react'
import{Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Whatched from './components/whatched'
import WhatchList from './components/WhatchList'
import Add from './components/Add'
import Header from './components/Header'
import './App.css'


export default function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <WhatchList />
        </Route>
        <Route path="/Whatched" exact>
          <Whatched />
        </Route>
        <Route path="/add" exact>
          <Add />
        </Route>
      </Switch>
    </Router>
   
    
  )
}



