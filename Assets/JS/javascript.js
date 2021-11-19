//Créer un livre

/*------------------------- */
/*1-Créer un livre avec des objets et tblx*/
/*------------------------- */
/*(Creation sous forme de variables en attendant de voir les tblx)*/
let book;
let title = "Les Misérables";
let author = "Victor Hugo";
let price = 14.95;
let category = "Drame";
let releaseDate = new Date(1997,05,23);
let nbSales =345;

/*------------- */
/* 2-Nous avons créé, ds un fichier books.js,un tbl d'objet*/
/*------------- */
console.log("BOOK LIST"); 
console.log(books);
// Importer un fichier .json ds un fichier JS (ss Framework) nécessite

//Tbl d'objet pour panier (avec 1 id et la quantité)
let cart =[
    {id:"0", qtt:1},
    {id:"1", qtt:3},
];
let totalPrice ; // prix total du panier à stocker ds cette variable

/*------------- */
/* 3-Conditions*/
/*------------- */

//Gestion du stock:DISPONIBILITE
let i = 0;
if (books[0].nbStock === 0) {
    console.log("Rupture de stocks");
}else{
    console.log("Il en reste :"+ books[0].nbStock+ " exemplaires.");
}

//Sorties récentes
if (books[i].releaseDate > books[i+1].releaseDate) {
    console.log(books[i].title + " est le plus récent des deux livres.");
}else{
    console.log(books[i+1].title + " est le plus récent des deux livres.");

}

//Meilleures ventes
if (books[i].nbSales > books[i+1].nbSales) {
    console.log(books[i].title + " a été le plus vendu");
}else{
    console.log(books[i+1].title + " a été le plus vendu");

}

//Panier 
// TODO:Video-4-53m06s