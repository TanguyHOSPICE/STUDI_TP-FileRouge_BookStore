//******On récupère les arguments passés dans l'URL (ici bookId) 

let params = window.location.search; // renvoie "?bookId="
let bookIdInUrl = params.slice(8);

//********** On insère dans la page html les infos du livres dont on a récupéré l'Id