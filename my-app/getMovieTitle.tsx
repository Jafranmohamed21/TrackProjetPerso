import { GhibliApi, GhibliJafran} from "./types";

const getMovieTitle = (moviesResponse: GhibliApi): GhibliJafran => {
    const titles = moviesResponse.map( movie => movie.title )
      return titles
}

export default getMovieTitle;