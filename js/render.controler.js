'use strict'

function render(booksData) {
    
    const elBook = document.querySelector('.book-data')

    const strHTML = booksData.map(book => `<tr><td>${book.title}</td>
                <td>${book.price}</td>
                <td>
                    <button class="read" onclick="onReadClick( this,'${book.id}')">Read</button>
                    <button class="update" onclick="onUpdateBook( this,'${book.id}')">Update</button>
                    <button class="delete" onclick="onRemoveBook( this,'${book.id}')">Delete</button>
                </td></tr>`)

    elBook.innerHTML = strHTML.join('')
}
function renderNotFound() {
    const elBook = document.querySelector('.book-data')
    const strHTML = `<tr><td>No matching books were found</td>
                                           </tr>`
    elBook.innerHTML = strHTML
}
function renderUpdateDialog() {
    const elDialog = document.querySelector('.update-dialog')
    const strHTML = `<form method="dialog" onsubmit="onUpdateClick(event)">
                        <pre>Catalog No' :  <span></span></pre>
                        <input type="text" placeholder="Enter new price">
                        <button class="update-price">Update</button>
                   </form>`
    elDialog.innerHTML = strHTML
}
function renderAddDialog() {
    const elDialog = document.querySelector('.update-dialog')
    const strHTML = `<form method="dialog" onsubmit="onAddSubmit(event)">  
                        <header>Enter book details</header>
                        <br>
                        <input type="text" id="name" class="new-book"  placeholder="Enter book name">
                        <input type="text" id="price" class="new-book"  placeholder="Book price">
                        <button class="new-book insert" >Insert</button>
                   </form>`
    elDialog.innerHTML = strHTML
}

function renderDetailsDialog(bookId) {
    const book = getBook(bookId)
    const elDialog = document.querySelector('.update-dialog')
    const strHTML = `<form method="dialog" onsubmit="onReadSubmit(event)">  
                      <header>Title : <span style="font-weight: bold; color: rgb(166, 106, 33);">${book.title}</span></header>
                      <pre>Catalog No' :  <span>${book.id}</span></pre>
                      <p>Price :  <span>${book.price}</span></p>
                      <img src="img/${book.imgUrl}" alt="">
                      <p>Price :  <span>${book.price}</span></p>
                      <h4>Rating</h4>
                      <input name="tgTxt" type="number" value="${book.rating}" max="5" min="0" step="1" style="width: 50px;" oninput="onRatingInput(event,${book.id})">
                      <button class="new-book read" >close</button>
                  </form>`
    elDialog.innerHTML = strHTML
}

function renderSuccessDialog() {
    const elDialog = document.querySelector('.update-dialog')
    const strHTML = `<form method="dialog" onsubmit="onUpdateClick(event)">
                        <pre>Good job</pre>
                   </form>`
    elDialog.innerHTML = strHTML
}