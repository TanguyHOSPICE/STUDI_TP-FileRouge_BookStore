//Créer un livre

/*------------------------- */ // !Provisoire
/*1-Créer un livre avec des objets et tblx*/
/*------------------------- */
/*(Creation sous forme de variables en attendant de voir les tblx)*/
/*
let book;
let title = "Les Misérables";
let author = "Victor Hugo";
let price = 14.95;
let category = "Drame";
let releaseDate = new Date(1997,05,23);
let nbSales =345;
*/
/*------------- */ // !Provisoire
console.log("2-Nous avons créé, ds un fichier books.js,un tbl d'objet");
/*------------- */
console.log("BOOK LIST :"); 
console.log(books);
// Importer un fichier .json ds un fichier JS (ss Framework) nécessite
console.log("-----------------------"); // !Provisoire

//Tbl d'objet pour panier (avec 1 id et la quantité)
let card =[
    {id:"0", qtt:1},
    {id:"1", qtt:3},
];
console.log("card");
console.log(card);
let totalPrice ; // prix total du panier à stocker ds cette variable
console.log("-----------------------"); // !Provisoire

/*------------- */
console.log("3-Conditions");
/*------------- */

//Gestion du stock:DISPONIBILITE
let i = 0;
if (books[0].nbStock === 0) {
    console.log("Rupture de stocks");
}else{
    console.log("Il en reste :"+ books[0].nbStock+ " exemplaires.");
}
console.log("-----------------------"); // !Provisoire

//Sorties récentes
if (books[i].releaseDate > books[i+1].releaseDate) {
    console.log(books[i].title + " est le plus récent des deux livres.");
}else{
    console.log(books[i+1].title + " est le plus récent des deux livres.");

}
console.log("-----------------------"); // !Provisoire

//Meilleures ventes
if (books[i].nbSales > books[i+1].nbSales) {
    console.log(books[i].title + " a été le plus vendu");
}else{
    console.log(books[i+1].title + " a été le plus vendu");

}
console.log("-----------------------"); // !Provisoire

//Panier: augmenter la qtité d'1 article 
if (card[i]) {//équivaut à card[1 === true]
    console.log("Quantité avant ajout: "+card[i].qtt++);
    card[i].qtt++;//on incrémentecard[1.qtt]
    //ou card[i].qtt = card[i].qtt +1;
    console.log("Quantité après ajout: "+card[i].qtt++);
}

/*------------- */
console.log("4-Boucles");
/*------------- */
//Rechercher un titre de livre


//Classement meilleurs ventes:Par tri a bulles 
let bestSales = [...books];

for (let i = 0; i < bestSales.length; i++) { 
    for (let j = 0; j < (bestSales.length - i - 1); j++) { //-i-1:pour éviter de reprendre au 1ier
        if(bestSales[j].nbSales < bestSales[j + 1].nbSales) {
            let tmp = bestSales[j]; // je stock 
            bestSales[j] = bestSales[j+1];
            bestSales[j + 1] = tmp; 
        }
    }         
}
console.log("-----------------------"); // !Provisoire
console.log("Par meilleures ventes :");
console.log(bestSales);              


// Classement sorties récentes (OK)
let recentOrder = [...books];

for (let i = 0; i < recentOrder.length; i++) { 
    for (let j = 0; j < recentOrder.length - i - 1; j++) { //-i-1:pour éviter de reprendre au 1ier
        if(recentOrder[j].releaseDate > recentOrder[j + 1].releaseDate) {
            let tmp = recentOrder[j]; 
            recentOrder[j] = recentOrder[j+1];
            recentOrder[j + 1] = tmp; 
        }
    }         
}
console.log("-----------------------"); // !Provisoire
console.log("Du plus récent au plus ancien :");
console.log(recentOrder);

//Affichage des prix (croissant/décroissant)>ajouter des filtres
let priceOrder = [...books];

for (let i = 0; i < priceOrder.length; i++) { 
    for (let j = 0; j < priceOrder.length - i - 1; j++) { //-i-1:pour éviter de reprendre au 1ier
        if(priceOrder[j].releaseDate > priceOrder[j + 1].releaseDate) {
            let tmp = priceOrder[j]; 
            priceOrder[j] = priceOrder[j+1];
            priceOrder[j + 1] = tmp; 
        }
    }         
}
console.log("-----------------------"); // !Provisoire
console.log("Par prix croissant :");
console.log(priceOrder);

/* ------------------- */
console.log("5. Fonctions (cours 6)"); 
/* ------------------- */

// à l'ancienne
function lastestReleases_old() {}
// ES6
const lastestReleases_new = (books) => {};

/* La manière la + courte (pour l'instant) de trier par sorties récentes */

function sortBestSales(a, b) {
  return a.nbSales - b.nbSales;
}
const bestSalesBooks = bestSales.sort(sortBestSales);
console.log( "-------------------------" );
bestSalesBooks.reverse();

const lastestReleases = (bestSalesBooks) => {
  // afficher les sorties récentes sur la page d'accueil
};



let library = [...books];
let library2 = [...books];

const sortBestSales = library.sort((a, b) => b.nbSales - a.nbSales);
console.log(sortBestSales);

const sortReleases = library2.sort((a, b) => b.releaseDate - a.releaseDate);
console.log(sortReleases);