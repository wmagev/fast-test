import React, { useState, useContext } from "react"
import styled from "styled-components"
import { useFetch } from 'react-custom-hook-use-axios'
import { StateContext } from "../context/AppContext"
import Grid from "../components/Grid"
import Topbar from "../components/Topbar"
import Paginate from "../components/Paginate"
import ConfirmButton from "../components/Button"

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("Batman")
    const [pageNum, setPageNum] = useState(1)
    const state = useContext(StateContext)

    const [loading, response, , ] = useFetch({
        url: `https://www.omdbapi.com/?apikey=176f1950&s=${searchTerm}&page=${pageNum}`
    }, [searchTerm, pageNum])

    const onSearchChange = event => {
        setSearchTerm(event.target.value)
        setPageNum(1)
    }

    const onPageChange = data => {
        setPageNum(data.selected + 1)
    }

    return (
        <>
            <Topbar>
                <SearchInput
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={onSearchChange}
                />
                <ConfirmButton 
                    to="/confirm" 
                    disabled={!state.length} 
                >
                    Confirm 
                    <Badge>
                        {state.length}
                    </Badge>
                </ConfirmButton>
            </Topbar>
            { loading && 
                <Loading src="https://carmedia.ru/wa-apps/shop/plugins/kealabs_search/img/loading.gif"/>
            }
            { !loading && response && response.Response === "True" ? (
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

const Loading = styled.img`
    width: 20%;
    display: block;
    margin 0 auto;
`

const SearchInput = styled.input`
    font-size: 20px;
    width: 50%;
`

const Badge = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 5px 10px;
    border-radius: 50%;
    background: #4CAF50;
    color: #fff;
`

export default Search