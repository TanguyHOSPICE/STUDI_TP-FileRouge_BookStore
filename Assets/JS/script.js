//Création fichier books.js, un array d'objets
/*
console.log("------- BOOK LIST -------");//!Provisoire
console.log(books);
*/

//*************Insérer les données des livres sur la page d'accueil 

//? Tri pour les sorties récentes 
let lastReleases = [...books];
lastReleases.sort((a, b) => b.releaseDate - a.releaseDate);
/*console.log("--------lastReleases----------");//!Provisoire
console.log(lastReleases);*/

//? Tri pour les meilleures ventes
let bestSales = [...books];
bestSales.sort((a, b) => b.nbSales - a.nbSales);
/*console.log("--------bestSales----------");//!Provisoire
console.log(bestSales);*/

//? On récupère les containers HTML ds le DOM par id
let lastReleasesHtml =document.getElementById("last-releases");
let bestSalesHtml =document.getElementById("best-sales");
/*console.log("-----lastReleasesHtml----");//!Provisoire
console.log(lastReleasesHtml);
console.log("-----bestSalesHtml----");//!Provisoire
console.log(bestSalesHtml);*/

//? On insère les sorties récentes (Factorisation)
insertBooksInHtml(lastReleases, lastReleasesHtml);

//? On insère les meilleures ventes 
insertBooksInHtml(bestSales, bestSalesHtml);



