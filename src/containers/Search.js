import React, { useState, useContext, useCallback, useRef } from "react"
import styled from "styled-components"
import { useFetch } from 'react-custom-hook-use-axios'
import { StateContext, DispatchContext } from "../context/AppContext"
import Grid from "../components/Grid"
import Topbar from "../components/Topbar"
import Paginate from "../components/Paginate"
import ConfirmButton from "../components/Button"
import { SEARCH_TERM_ADD } from "../constants"
import { throttle } from "../utils/movieUtil"

const Search = () => {
    const { query, movies } = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const [pageNum, setPageNum] = useState(1)

    const [loading, response, , ] = useFetch({
        url: `https://www.omdbapi.com/?apikey=176f1950&s=${query}&page=${pageNum}`
    }, [query, pageNum])

    const throttledDispatch = throttle(() => {
        dispatch({
            type: SEARCH_TERM_ADD,
            payload: searchRef.current.value
        })
    }, 500)

    const dispatchQuery = useCallback( () => {
        // To avoid link warning from exhaustive deps
        throttledDispatch()
    }, [throttledDispatch] )

    const searchRef = useRef()

    const onSearchChange = event => {
        setPageNum(1)
        dispatchQuery()
    }

    const onPageChange = data => {
        setPageNum(data.selected + 1)
    }

    return (
        <>
            <Topbar>
                <SearchInput
                    type="text"
                    placeholder="Search Movies By Title"
                    defaultValue={query}                    
                    onKeyUp={onSearchChange}
                    ref={searchRef}
                />
                <ConfirmButton 
                    to="/confirm" 
                    disabled={ !movies.length }
                >
                    Confirm 
                    <Badge>
                        { movies.length }
                    </Badge>
                </ConfirmButton>
            </Topbar>
            { loading && 
                <Loading src="https://carmedia.ru/wa-apps/shop/plugins/kealabs_search/img/loading.gif"/>
            }
            { !loading && response && response.Response === "True" ? (
                <>
                    <Paginate
                        totalResults={ response.totalResults }
                        onPageChange={ onPageChange }
                        curPage={ pageNum - 1 }
                    />
                    <Grid
                        movies={ response.Search }
                    />
                </>
            )
            : (
                <>
                { !loading && query.length > 0 && response && response.Error &&
                    (<Error>{ response.Error }</Error>)
                }
                </>
            )
        }
        </>
    )
}

const Error = styled.div`
    color: #721c24;
    background-color: #f8d7da;
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