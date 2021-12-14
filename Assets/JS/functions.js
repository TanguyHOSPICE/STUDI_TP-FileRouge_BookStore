
//Creation fonction pour factoriser
const insertBooksInHtml= (booksList, htmlContainer)=>{
    
    //********On boucle sur lastReleases trié
    
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
        //Est ce que le livre a du stock? 
        let dispo = booksList[i].nbStock > 0 ? "book-available" : "book-unavailable" //? Ternaire


        // On insère le HTML ds le container, avec les données du livre
        htmlContainer.innerHTML +=`
            <article class="book-item">
                <div class="home-book-img"><a href="/"><img src="${booksList[i].cover}" alt="book cover ${booksList[i].title}"></a></div>
                <div class="home-book-title" data-bookId="${booksList[i].id}">${booksList[i].title}</div>
                <div class="home-book-author">${booksList[i].author}</div>
                <div class="home-book-price"><span class="dispo ${dispo}"></span> ${booksList[i].price}<span>€</span></div>
                <button class="home-book-cart  ${dispo}">Ajouter</button>
                <div class="home-book-stock  ${dispo}"><a href="/">Etre informé du retour en stock</a></div>
            </article>
        `;  
    }

}

// Fait passer les infos d'un livre ds URL
const bookIdInUrl = (bookId) =>{
    console.log(bookId);
}