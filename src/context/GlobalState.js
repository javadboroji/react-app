import {createContext, useContext,useEffect,useReducer}from 'react'
import AppRducer from './AppReducer'

//initial state
const initialstate={
    watchlist:localStorage.getItem("watchlist")?
    JSON.parse(localStorage.getItem("watchlist")):[],
    
    watched:localStorage.getItem("watched")?
    JSON.parse(localStorage.getItem("watched")):[]
}

//creat context

export const GlobalContext = createContext(initialstate)

//provider
export const GlobalProvider= props =>{
    const[state,dispatch]=useReducer(AppRducer,initialstate)

    //sate save and give state from localstoreg
    useEffect(()=>{
        localStorage.setItem('watchlist',JSON.stringify(state.watchlist))

        localStorage.setItem('watched',JSON.stringify(state.watched))
    },[state])



    //action
    const addMovieWatchlist= movie =>{
        dispatch({type:"ADD_MOVIE_TO_WATCHLIST",payload:movie})
    }
    const removeFromWatchlist = id =>{
        dispatch({type:"REMOVE_FROM_WATCHLIST",payload:id})
    }




    return(
        <GlobalContext.Provider value={{
            watchlist:state.watchlist,
            watched:state.watched,
            addMovieWatchlist,
            removeFromWatchlist}}>
            {props.children}
        </GlobalContext.Provider>
    )
}