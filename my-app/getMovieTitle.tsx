const getMovieTitle = (value: any) => { 
    var j = 0;
    var title = new Array();
    //var image = new Array()
    for (let n in value) {
        var val = Object.values(value[n]); // recuperer les donnees d'un film a la suite
        var tab = Object.getOwnPropertyNames(value[n]); //les differentes donnees presentes
        for (let i in tab) {
          if (tab.hasOwnProperty(i)) { //parcourir les differents donnees d'un film
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