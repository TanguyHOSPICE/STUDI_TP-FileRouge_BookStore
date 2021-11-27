//Création fichier books.js, un array d'objets
console.log("------- BOOK LIST -------");
console.log(books);

let bestSales = [...books];
let lastReleases = [...books];
/*Tri pour les meilleures ventes */
const sortBestSales = bestSales.sort((a, b) => b.nbSales - a.nbSales);
console.log(sortBestSales);

/*Tri pour les sorties récentes */
const sortReleases = lastReleases.sort((a, b) => b.releaseDate - a.releaseDate);
console.log(sortReleases);

// TODO:19m13s