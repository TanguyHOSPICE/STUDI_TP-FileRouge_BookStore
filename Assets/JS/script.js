//Création fichier books.js, un array d'objets
console.log("------- BOOK LIST -------");
console.log(books);



/*Insérer les données des livres sur la page d'accueil */

//?-------------Sorties récentes 
let lastReleases = [...books];

/*Tri pour les sorties récentes */
const sortReleases = lastReleases.sort((a, b) => b.releaseDate - a.releaseDate);
/*console.log("--------lastReleases----------");//!Provisoire
console.log(lastReleases);*/

//On récupère le container HTML ds le DOM par id
let lastReleasesHtml =document.getElementById("last-releases");
/*console.log("-----lastReleasesHtml----");//!Provisoire
console.log(lastReleasesHtml);*/

//On boucle sur lastReleases trié
/*for (const element of lastReleases) {
    console.log("-----element----");//!Provisoire
    console.log(element);
    let i =0;
    if (i<=8) {
        //instructions
        i++;
    }
}
*/
for (let i = 0; i <8; i++) {
    lastReleasesHtml.innerHTML +=`
        <article class="book-item">
            <div class="book-img"></div>
            <div class="book-title">${lastReleases[i].title}</div>
            <div class="book-author">${lastReleases[i].author}</div>
            <div class="book-category">${lastReleases[i].category}</div>
            <div class="book-price">${lastReleases[i].price}€</div>
        </article>
    `;  
}


//?----------- Meilleures ventes
let bestSales = [...books];

/*Tri pour les meilleures ventes */
const sortBestSales = bestSales.sort((a, b) => b.nbSales - a.nbSales);
console.log("--------bestSales----------");
console.log(bestSales);

//TODO:54m02s
