import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import media from "../media"

const Button = props => (
    <ButtonWrapper { ...props } > { props.children } </ButtonWrapper>
)

const ButtonWrapper = styled(Link)`
    position: relative;
    background: #fff;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    padding: 10px 10px;
    text-decoration: none;    
    color: #000;
    &:hover {
        &:not([disabled]) {
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
        }
    }
    &[disabled] {
        color: #ccc;
    }

    ${media.tablet`        
        padding: 10px 20px;
    `};
`

export default Button