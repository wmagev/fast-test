
const isSelected = (movies, title) => {    
    return movies.some( movie => movie.Title === title)
}

export {
    isSelected
}