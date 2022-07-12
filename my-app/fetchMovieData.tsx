

const getMovieData = () => {
    return fetch('https://ghibliapi.herokuapp.com/films')
     .then(response => response.json())
     .then(result => {
        return result
     })
 }

export default getMovieData;
