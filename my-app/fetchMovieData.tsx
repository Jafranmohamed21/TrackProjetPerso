import getMovieTitle from "./getMovieTitle";

const getMovieData = () => {
    return fetch('https://ghibliapi.herokuapp.com/films')
     .then(response => response.json())
     .then(result => {
        console.log('result', result[0])
        return getMovieTitle(result)
     })
 }

export default getMovieData;
