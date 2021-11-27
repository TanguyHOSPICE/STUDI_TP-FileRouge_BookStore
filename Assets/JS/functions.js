
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
        htmlContainer.innerHTML +=`
            <article class="book-item">
                <div class="book-img"></div>
                <div class="book-title">${booksList[i].title}</div>
                <div class="book-author">${booksList[i].author}</div>
                <div class="book-category">${booksList[i].category}</div>
                <div class="book-price">${booksList[i].price}€</div>
            </article>
        `;  
    }

}
