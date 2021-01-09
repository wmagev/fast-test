import React, { useState, useContext } from "react"
import styled from "styled-components"
import { useFetch } from 'react-custom-hook-use-axios'
import { StateContext } from "../context/AppContext"
import Grid from "../components/Grid"
import Paginate from "../components/Paginate";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("Batman")
    const [pageNum, setPageNum] = useState(1)
    const state = useContext(StateContext)

    const [loading, response, , error] = useFetch({
        url: `http://www.omdbapi.com/?apikey=176f1950&s=${searchTerm}&page=${pageNum}`
    }, [searchTerm, pageNum])

    const onSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    const onPageChange = data => {        
        setPageNum(data.selected + 1)
    }

    const onConfirmClick = () => {
        console.log(state)
    }

    return (
        <>
            <SearchWrapper>
                <SearchInput
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={onSearchChange}
                />
                <Confirm onClick={onConfirmClick}> Confirm </Confirm>
            </SearchWrapper>
            { loading && 
                <Loading src="https://carmedia.ru/wa-apps/shop/plugins/kealabs_search/img/loading.gif"/>
            }
            { !loading && response && response.Response == "True" ? (
                <>
                    <Paginate
                        totalResults={response.totalResults}
                        onPageChange={onPageChange}
                        curPage={pageNum - 1}
                    />
                    <Grid
                        movies={response.Search}
                    />
                </>
            )
            : (
                <Error>{ response && response.Error }</Error>
            )
        }
        </>
    )
}

const Error = styled.div`
    background: #fff;
    box-shadow: 0 5px 5px #ddd;
    color: #f00;
    padding: 5px;
    text-align: center;
`

const SearchWrapper = styled.div`
    position: sticky;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 20px;
    height: 40px;
    display: flex;
    justify-content: space-between;
`

const Loading = styled.img`
    width: 20%;
    display: block;
    margin 0 auto;
`

const SearchInput = styled.input`
    font-size: 20px;
`

const Confirm = styled.button`
    background: #fff;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    padding: 0 20px;
    font-weight: 700;
    &:hover {
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
    }    
`

export default Search