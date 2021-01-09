import React from "react"
import styled from "styled-components"
import GridItem from "./Item"
import media from "../../media"

const Grid = ({ movies }) => {

    return (
        <GridContainer>
            { movies.map( (movie, key) => (
                <GridItem key={ key } movie={movie} />
            )) }
        </GridContainer>
    )
}

const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;    
    flex-direction: column;
    text-align: center;    
    ${media.tablet`
        justify-content: space-between;
        flex-direction: row;
        margin: 0;
    `};
`

export default Grid