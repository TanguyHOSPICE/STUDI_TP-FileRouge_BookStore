//Création fichier books.js, un array d'objets
/*
console.log("------- BOOK LIST -------");//!Provisoire
console.log(books);
*/

//************* 1-Insérer les données des livres sur la page d'accueil 

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
insertBooksInHomePage(lastReleases, lastReleasesHtml);

//? On insère les meilleures ventes 
insertBooksInHomePage(bestSales, bestSalesHtml);

//************* 2-Afficher la page article au clic d'un livre

// On récupère les titres de la page acceuil
const bookTitles = document.getElementsByClassName('home-book-title');

// Pour chaque titre de livre, on associe un évènement au clic
for (const bookTitle of bookTitles) {
    // On récupère l'Id du livre à travers data-bookId
    let bookId = bookTitle.dataset.bookid;
    let page = "article";
    bookTitle.addEventListener('click', () =>{
        // On appelle la fonction (dans function.js) qui créé l'URL à partir de l'id;
        bookIdInUrl(bookId, page);
    });
}

//************* 3-Créer un tbl d'objets panier

//Ajout au panier au clic du btn "Ajouter au panier"
let cart = [];

// On récupère les btn "Ajouter au panier" de la page d'acceuil
const cartBtns = document.getElementsByClassName('book-add-cart');

for (const cartBtn of cartBtns) {
    // On récupère l'Id du livre à travers data-bookId
    let bookId = cartBtn.dataset.bookid;
    cartBtn.addEventListener('click', () =>{
        // creation bookAdded pour ne pas répéter notre livre si déjà ds cart
        let bookAdded = false;
        for (cartItem in cart) {
            if (cartItem.id === bookId) {
                cartItem.qtt++;
                bookAdded = true;
                break;
            }
        }
        if (!bookAdded) { // correspond à bookAdded === false
            cart.push({
                id: bookId,
                qtt: 1,
            });
        }
        //! Provisoire 
        console.log("-----Cart:----");
        console.log(cart);
        // todo vid--11--Bug home page--1h00m46s
    });
}