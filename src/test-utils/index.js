import React, { useReducer } from "react"
import { StateContext, DispatchContext } from "../context/AppContext"

const AllTheProviders = ({ children }) => {
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

const customRender = (ui, options) => {
    render(ui, {
        wrapper: AllTheProviders, ...options
    })
}

export * from "@testing-library/react"

export { customRender as render }