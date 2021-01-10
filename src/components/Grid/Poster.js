import React from "react"
import styled from "styled-components"
import media from "../../media"

const Poster = ({ movie, grid = true }) => {

    const onPosterError = event => {
        event.target.src = "https://dalk4zrp4jp3q.cloudfront.net/images/mac_YFVkNF/movie_placeholder_big_2x.png"        
    }

    return (
        <PosterWrapper 
            src={ movie.Poster }
            alt={ movie.Title }
            onError={ onPosterError }
            data-grid={ grid }
        />
    )
}

const PosterWrapper = styled.img`
    display: block;
    margin: 0 auto;
    ${props => !props['data-grid'] &&
        "height: 100px;"
    }
    ${media.tablet`        
        ${props => !props['data-grid'] ?
            "height: 100px;" :
            "width: 100%; height: 75%;"
        }
    `};
    
`
export default Poster