
const isSelected = (movies, title) => {    
    return movies.some( movie => movie.Title === title)
}

const throttle = (callback, delay = 250) => {
    let timeout = undefined;    

    return function (...args) {
        if (timeout) {
            return;
        }
        const context = this;
        timeout = setTimeout(() => {
            callback.apply(context, args);
            timeout = undefined;
        }, delay);
    };
};

export {
    isSelected,
    throttle
}