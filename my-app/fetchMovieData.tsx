
/*const getMovieData = (callback: (arg: any) => void) => {
    
    fetch('https://ghibliapi.herokuapp.com/films') //chercher les infos des films du studio Ghibli
    .then(response => response.json())
    .then(data => {callback(data)});
}*/

const getMovieData = () => {
    return fetch('https://ghibliapi.herokuapp.com/films') //chercher les infos des films du studio Ghibli
     .then(response => response.json())
 }

export default getMovieData;
