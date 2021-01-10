import React from "react"
import Poster from "../components/Grid/Poster"
import { Mobile, Default } from "../media/Tags"

const RowItem = ({ movie }) => {
    return (
        <tr>
            <td>
                <Poster 
                    movie={ movie }
                    grid={ false }
                />
            </td>
            <Mobile>
                <td>
                    <div>Title: { movie.Title } </div>
                    <div>Year: { movie.Year } </div>
                    <div>Type: { movie.Type } </div>
                </td>
            </Mobile>
            <Default>
                <td> { movie.Title } </td>
                <td> { movie.Year } </td>
                <td> { movie.Type } </td>
            </Default>
        </tr>
    )
}

export default RowItem