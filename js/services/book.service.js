'use strict'

var gBooks = [
    { id: 'b00', title: 'The Adventures of Lori Ipsi', price: 120,imgUrl: 'lori-ipsi.jpg' },
    { id: 'b01', title: 'Word Atlas', price: 120,imgUrl: 'Word-Atlas.jpg' },
    { id: 'b02', title: 'Zorba The Greek', price: 120,imgUrl: 'Zorba-The-Greek.jpg' },
]


function getBooks() {
    return gBooks
}
function removeBook(bookId) {
    const indx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(indx, 1)
}

function updateBook(newPrice, bookId) {
    console.log('bookId', bookId);
    console.log('newPrice', newPrice);
    const updateBook = gBooks.find(book => book.id === bookId)
    updateBook.price = newPrice
}
function insertBook(inputName, inputPrice) {
    var book = {
        id: makeId(5),
        title: inputName,
        price: inputPrice,
        imgUrl: `${inputName}.jpg`
    }
    gBooks.push(book)
}