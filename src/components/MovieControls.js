import { findByDisplayValue } from '@testing-library/dom'
import React,{useContext} from 'react'
import{ Container, Row ,Col, Button} from 'react-bootstrap'
import{GlobalContext} from '../context/GlobalState'
function MovieControls({movie,type}) {
    const{removeFromWatchlist}=useContext(GlobalContext)
    return (
        < >
    
         {type === "watchlist" &&(<div className="btn_reletive_box">
         <Button className="button-customize" variant="warning"><i className="fa fa-eye" aria-hidden="true"></i></Button>{' '}
         <Button className="button-customize" variant="danger" onClick={()=>removeFromWatchlist(movie.id)}><i className="fa fa-window-close" aria-hidden="true"></i></Button>{' '}
        </div>)}
        
        </>
       
    )
}

export default MovieControls
