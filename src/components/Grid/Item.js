import React, { useContext, useState } from "react"
import styled from "styled-components"
import { MOVIE_ADD, MOVIE_DELETE } from "../../constants"
import { DispatchContext } from "../../context/AppContext"
import media from "../../media"

const Item = ({ movie }) => {

    const dispatch = useContext(DispatchContext)
    const [selected, setSelected] = useState(false)
    
    const onItemClick = () => {
        setSelected(!selected)
        dispatch({
            type: !selected ? MOVIE_ADD : MOVIE_DELETE,
            payload: movie
        })        
    }

    const onPosterError = event => {
        event.target.src = "https://dalk4zrp4jp3q.cloudfront.net/images/mac_YFVkNF/movie_placeholder_big_2x.png"        
    }

    return (
        <GridItem onClick={ onItemClick } data-selected={selected} >
            <Poster src={ movie.Poster } alt={ movie.Title } onError={onPosterError} />
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

const Poster = styled.img`
    display: block;
    margin: 0 auto;
    ${media.tablet`
        width: 100%;
        height: 75%;        
    `};
`

const AdditionalInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 25%;
`

export default Item