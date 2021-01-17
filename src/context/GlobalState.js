import React, {createContext, useReducer, useEffect} from 'react';
import {AppReducer} from './AppReducer';

 //initial state
 const initialState = {
     watchlist: [],
     watched: [],
 };

 //create Context
 export const GlobalContext = createContext(initialState);

 //Provider Component
 export const GlobalProvider = props => {
     const [state, dispatch] = useReducer(AppProvider, initialState);

     //Actions
     const addMovieToWatchlist = movie => {
         dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
     };

     return (
         <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched }}>
             {props.children}
         </GlobalContext.Provider>
     )
 };