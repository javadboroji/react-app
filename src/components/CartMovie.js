import React,{useContext} from 'react'
import{ Container, Row ,Col, Button} from 'react-bootstrap'
import {GlobalContext}from'../context/GlobalState'
import './CartMovie.css'
export default function CartMovie({movie}) {
    const{addMovieWatchlist,watchlist}=useContext(GlobalContext)

    // if btn click whathed : disbled btn 
    let storeWatchtlist=watchlist.find(o=>o.id === movie.id);

    const watchlistDisable= storeWatchtlist ? true :false ;
    return (
        
       
            
                <div className="d-flex" >
                     <div className="img-box">{movie.image ?  <img src={movie.image} alt={movie.title} />:<p>{movie.title}</p> }</div>
                  <div className="d-flex flex-column mt-3"> 
                   <h4>{movie.title}</h4>
                    <p>{movie.description} </p>
                    <Button className="m-2" variant="primary"
                    disabled={watchlistDisable}
                    onClick={()=>addMovieWatchlist(movie)}
                    > Add To whatchList</Button>
                    </div>
                    
                </div>
                
                
         
       
    )
}
