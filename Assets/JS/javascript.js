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
console.log("-----------------------"); // !Provisoire

//Tbl d'objet pour panier (avec 1 id et la quantité)
let card =[
    {id:"0", qtt:1},
    {id:"1", qtt:3},
];
console.log(card);
let totalPrice ; // prix total du panier à stocker ds cette variable
console.log("-----------------------"); // !Provisoire

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
/* 4-Boucles*/
/*------------- */

//Classement meilleurs ventes:Par tri a bulles 
//TODO:1 erreur voir video 6 - 6/10/21
    for (let i = 0; i < books.length; i++) { 
        for (let j = 0; j < (books.length - i - 1); j++) { //-i-1:pour éviter de reprendre au 1ier
            if(books[j].nbSales > books[j + 1].nbSales) {
                let tmp = books[j]; 
                books[j] = books[j+1];
                books[j + 1] = tmp; 
            }
        }         
    }
    console.log("-----------------------"); // !Provisoire
    console.log("Livres triés du plus vieux au plus récent");
    console.log(books);
                


// Classement sorties récentes (OK)
    for (let i = 0; i < books.length; i++) { 
        for (let j = 0; j < (books.length - i - 1); j++) { //-i-1:pour éviter de reprendre au 1ier
            if(books[j].releaseDate > books[j + 1].releaseDate) {
                let tmp = books[j]; 
                books[j] = books[j+1];
                books[j + 1] = tmp; 
            }
        }         
    }
    console.log("-----------------------"); // !Provisoire
    console.log("Livres sorti du plus vieux au plus récent");
    console.log(books);
//Rechercher un titre de livre

//Affichage des prix (croissant/décroissant)>ajouter des filtres