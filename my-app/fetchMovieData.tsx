
const MovieData = (callback: (arg: any) => void) => {
    
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => {callback(data)});
}

export default MovieData;