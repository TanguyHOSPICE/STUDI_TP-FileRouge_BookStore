//Créer un livre

//Creation sous forme de variables en attendant de voir les tblx
let book;
let title = "Les Misérables";
let author = "Victor Hugo";
let price = 14.95;
let category = "Drame";
let releaseDate = new Date(1997,05,23);
let nbSales =345;

//Créer un livre avec des objets et tblx
let books = []; // TODO:Importer le json

//Création Tbl d'objet pour panier avec 1 id et la quantité
let cart =[
    {id:"0", qtt:1},
    {id:"1", qtt:3},
];