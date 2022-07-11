import { GhibliApi} from "./types";

const getMovieTitle = (data: GhibliApi) => { 
    var value = Object.values(data);
    var j = 0;
    var title = new Array();

    for (let n in value) {
        var val = Object.values(value[n]);
        var tab = Object.getOwnPropertyNames(value[n]); 
        for (let i in tab) {
          if (tab.hasOwnProperty(i)) {
              if(tab[i] == 'title'){
                title[j] = val[i];
                j++;
              }
          }
          else {
          }
        }
      }
      return title
}

export default getMovieTitle;