import React, { useContext } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Topbar from "../components/Topbar"
import { StateContext } from "../context/AppContext"
import RowItem from "../components/RowItem"
import BackButton from "../components/Button"
import { Mobile, Default } from "../media/Tags"


const Confirm = () => {
    const { movies } = useContext(StateContext)

    return (
        <Layout>
            <Topbar>
                <Title>Selected Movies</Title>
                <BackButton 
                    to="/"
                >
                    Back
                </BackButton>
            </Topbar>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Thumbnail</th>
                        <Mobile>
                            <th>Info</th>
                        </Mobile>
                        <Default>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Type</th>
                        </Default>
                    </tr>
                </thead>
                <tbody>
                    { movies.map( (movie, key) => (
                        <RowItem
                            key={key}
                            movie={movie} 
                        />
                    )) }
                </tbody>
            </StyledTable>
        </Layout>
    )
}


const Title = styled.h3`
    display: inline-block;
    color: #fff;
    margin: auto 0;
`

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    tr {
        border: 1px solid #000;        
        &:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        &:hover {
            background-color: #ddd;
        }
    }
    th {
        background-color: #000;
        color: #fff;
    }
    td, th {
        border: 1px solid #ddd;
        padding: 5px;
    }
    

    
`

export default Confirm