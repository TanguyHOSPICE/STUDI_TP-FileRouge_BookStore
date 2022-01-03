//******On récupère les arguments passés dans l'URL (ici bookid) 

let params = window.location.search; // renvoie "?bookId="
let bookIdUrl = params.slice(8);
let currentBook = {};

//********** On insère dans la page html les infos du livres dont on a récupéré l'Id

for (book of books) {
    if (book.id === bookIdUrl) {
        //? Provisoire 1
        // console.log("**********book.id:**********");
        // console.log(book.id); 
        currentBook = book;
        //! On risque de boucler sur trop de livres si il y a bcp de livre d'ou le break
        break;
    }
}
//? Provisoire 1
// console.log("*********currentBook:***********");
// console.log(currentBook);

//******* On définit notre htmlContainer
let htmlContainer = document.getElementById('book-article');
// console.log("*********htmlContainer:***********");
// console.log(htmlContainer);

//On appel la fonction insertBookInfosInArticlePage 
insertBooksInfosInArticlePage (currentBook, htmlContainer);