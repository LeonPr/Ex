'use strict'

const EXBOOKS_KEY = 'books' 

var gBooks=[]
_createBooks()

function getBooks() {
    return gBooks
}
function getBook(bookId){
    return gBooks.find(book => book.id === bookId)

}
function removeBook(bookId) {
    const indx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(indx, 1)
    _saveBooks()
}

function updateBook(newPrice, bookId) {
    const updateBook = gBooks.find(book => book.id === bookId)
    updateBook.price = newPrice
    _saveBooks()
}

function insertBook(inputName, inputPrice) {
    gBooks.push(_createBook(inputName, inputPrice))
    _saveBooks()
}
function _createBooks(){
    gBooks = loadFromStorage(EXBOOKS_KEY)

    if(gBooks && gBooks.length !== 0) return

    gBooks=[]
    gBooks.push(_createBook('The Adventures of Lori Ipsi',120))
    gBooks.push(_createBook('Word Atlas',300))
    gBooks.push(_createBook('Zorba The Greek',87))

    _saveBooks()

}
function _createBook(inputName, inputPrice){
    return  {
        id: makeId(5),
        title: inputName,
        price: inputPrice,
        imgUrl: `${inputName}.jpg`
    }
    
}

function _saveBooks() {
    saveToStorage(EXBOOKS_KEY, gBooks)
}