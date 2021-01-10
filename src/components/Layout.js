import React, { useReducer } from "react"
import styled from "styled-components"
import { StateContext, DispatchContext } from "../context/AppContext"
import movieReducer from "../reducers/movieReducer"

const Layout = ({children}) => {

    const [state, dispatch] = useReducer(
        movieReducer, 
        {
            query: "",
            movies: []
        }
    );

    return (        
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <LayoutWrapper> {children} </LayoutWrapper>
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

const LayoutWrapper = styled.div`
    margin: 0 auto;
    padding: 1rem;
    max-width: 1366px;
    font-size: 18px;    
`

export default Layout