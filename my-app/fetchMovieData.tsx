import getMovieTitle from "./getMovieTitle";

const getMovieData = () => {
    return fetch('https://ghibliapi.herokuapp.com/films')
     .then(response => response.json())
     .then(result => {
        return getMovieTitle(result)
     })
 }

export default getMovieData;
