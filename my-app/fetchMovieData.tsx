
const MovieData = (callback: (arg: any) => void) => {
    
    fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
    .then(response => response.json())
    .then(data => {callback(data)});
}

export default MovieData;