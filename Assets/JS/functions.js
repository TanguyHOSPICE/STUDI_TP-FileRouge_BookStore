
//Creation fonction pour factoriser
const insertBooksInHomePage= (booksList, htmlContainer)=>{
    
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
                <div class="home-book-title" data-bookid="${booksList[i].id}">${booksList[i].title}</div>
                <div class="home-book-author">${booksList[i].author}</div>
                <div class="home-book-price"><span class="dispo ${dispo}"></span> ${booksList[i].price}<span>€</span></div>
                <button class="book-add-cart  ${dispo}" data-bookid="${booksList[i].id}">Ajouter</button>
                <div class="home-book-stock  ${dispo}"><a href="/">Etre informé du retour en stock</a></div>
            </article>
        `;  
    }

}

// Fait passer les infos d'un livre ds URL

const bookIdInUrl = (bookId ,page) =>{
    window.location.href="./"+page+".html?bookid="+bookId;
}

// Insérer les livres sur la page article HTML

const insertBooksInfosInArticlePage = (bookInfo, htmlContainer) => {
    // On insère le HTML ds le container, avec les données du livre
    htmlContainer.innerHTML+=`    
    <div class="book-spotlight-left">
        <img src="${bookInfo.cover}" alt="book cover ${bookInfo.title}"> 
    </div>

<div class="book-spotlight-right">
    <div class="book-spotlight-right-title">${bookInfo.title}</div>
    <div class="book-spotlight-right-author">De <a href="/">${bookInfo.author}</a> - ${bookInfo.category}</div>
    <!--TODO A changer mode insertion étoiles--><div class="book-spotlight-right-note">Note: <img src="/Assets/MEDIA/IMG/etoile.png"
            alt="Stars notation"></div>
    <div class="book-spotlight-right-desc">
    <!--TODO A changer mode insertion descriptions-->
        <div class="book-spotlight-right-desc-title">Description</div>
        ${bookInfo.synopsis}
    </div>

    <div class="book-spotlight-right-btn">
        <button class="book-add-cart">Ajouter au panier</button>
    </div>
    `; 
}

// TODO:For function article page
// <!-- <div class="book-spotlight-right-note">Note: <img src="${bookInfo.note}" alt="Stars notation"></div>
// <div class="book-spotlight-right-price"><span class="dispo ${dispo}"></span> ${bookInfo.price}<span>€</span></div>
// </div> -->