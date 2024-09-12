'use strict'

function onInit() {
    render()
}

function render() {
    const booksData = getBooks()
    const elBook = document.querySelector('.book-data')

    const strHTML = booksData.map(book => `<tr><td>${book.title}</td>
                <td>${book.price}</td>
                <td>
                    <button class="read" onclick="onReadClick( this,${book.id})">Read</button>
                    <button class="update" onclick="onUpdateBook( this,${book.id})">Update</button>
                    <button class="delete" onclick="onRemoveBook( this,'${book.id}')">Delete</button>
                </td></tr>`)

    elBook.innerHTML = strHTML.join('')
}
function onRemoveBook(elBook,bookId){
    RemoveBook(bookId)
    render()
}
function onUpdateBook(elBook,bookId){
    
}