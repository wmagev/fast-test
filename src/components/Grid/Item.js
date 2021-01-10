import React, { useContext, useState } from "react"
import styled from "styled-components"
import { MOVIE_ADD, MOVIE_DELETE } from "../../constants"
import { StateContext, DispatchContext } from "../../context/AppContext"
import { isSelected } from "../../utils/movieUtil"
import media from "../../media"
import Poster from "./Poster"

const Item = ({ movie }) => {

    const dispatch = useContext(DispatchContext)
    const state = useContext(StateContext)
    const [selected, setSelected] = useState(isSelected(state, movie.Title))
    
    const onItemClick = () => {
        setSelected(!selected)
        dispatch({
            type: !selected ? MOVIE_ADD : MOVIE_DELETE,
            payload: movie
        })        
    }

    return (
        <GridItem 
            onClick={ onItemClick } 
            data-selected={selected} 
        >
            <Poster movie={movie} />
            <AdditionalInfo>
                <div> { movie.Title } </div>
                <div> { movie.Year } </div>
                <div> { movie.Type } </div>
            </AdditionalInfo>
        </GridItem>
    )
}

const GridItem = styled.div`
    padding: 10px;
    height: auto;
    transition: 0.2s;
    box-shadow: 5px 5px 15px #ccc;
    border: 2px solid #ddd;    
    margin: 10px 0;

    ${media.tablet`        
        flex: 0 0 28%;
    `};
    ${media.desktop`        
        flex: 0 0 20%;
    `};
    ${media.widescreen`        
        flex: 0 0 18%;
    `};
    &:hover {
        box-shadow: 5px 5px 5px #ccc;
    }
    ${props => props['data-selected'] &&
        "box-shadow: 4px 4px 5px #ccc; border: 2px solid #000;"
    }
    
`

const AdditionalInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 25%;
`

export default Item