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
let card =[
    {id:"0", qtt:1},
    {id:"1", qtt:3},
];
console.log(card);
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

//Panier: augmenter la qtité d'1 article 
if (card[i]) {//équivaut à card[1 === true]
    console.log("Quantité avant ajout: "+card[i].qtt++);
    card[i].qtt++;//on incrémentecard[1.qtt]
    //ou card[i].qtt = card[i].qtt +1;
    console.log("Quantité après ajout: "+card[i].qtt++);
}

/*------------- */
/* 4-Boucles*/
/*------------- */
// TODO:59m32s
//Classement meilleurs ventes:Par tri a bulles
/*
function bubbleSort(items) {
    let length = items.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
}
 
bubbleSort(books[j]);

console.log(books[j]);
*/

fonction bubbleSort(array){
    return array.sort(a,b)=>{return a-b}
}
let array = []
console.log(bubbleSort(array));
// Classement sorties récentes

//Rechercher un titre de livre

//Affichage des prix (croissant/décroissant)>ajouter des filtres