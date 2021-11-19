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
let books = [
    {
     title: "Les Misérables",
     author: "Victor Hugo",
     price: 14.95,
     category: "Drame",
     releaseDate: new Date(1997,05,23),
     nbSales:345,
     resume:"Jean Valjean a été condamné au bagne en 1795 pour le vol d'un pain, jugement qui symbolise l'oppression qu'impose une société injuste à une population écrasée ; L'Inspecteur Javert, policier, incarne l'intransigeance de la société bourgeoise. Pas de rémission pour un ancien forçat, pas de grâce pour Valjean.",
     votes:[5,4,5],
    },
    {
     title: "Les Misérables",
     author: "Victor Hugo",
     price: 14.95,
     category: "Drame",
     releaseDate: new Date(1997,05,23),
     nbSales:345,
     resume:"",
     votes:[8,5,4,3,5],
    },
    {
     title: "Les Misérables",
     author: "Victor Hugo",
     price: 14.95,
     category: "Drame",
     releaseDate: new Date(1997,05,23),
     nbSales:345,
     resume:"",
     votes:[5,6,7,4,5],
    },
];
