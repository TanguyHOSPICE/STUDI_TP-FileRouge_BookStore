let library = [...books];
let library2 = [...books];

const sortBestSales = library.sort((a, b) => b.nbSales - a.nbSales);
console.log(sortBestSales);

const sortReleases = library2.sort((a, b) => b.releaseDate - a.releaseDate);
console.log(sortReleases);