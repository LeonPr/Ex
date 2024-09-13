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
                    <button class="read" onclick="onReadClick( this,'${book.id}')">Read</button>
                    <button class="update" onclick="onUpdateBook( this,'${book.id}')">Update</button>
                    <button class="delete" onclick="onRemoveBook( this,'${book.id}')">Delete</button>
                </td></tr>`)

    elBook.innerHTML = strHTML.join('')
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
                      <button class="new-book read" >close</button>
                  </form>`
    elDialog.innerHTML = strHTML
}

function onRemoveBook(elBook, bookId) {
    removeBook(bookId)
    render()
}

function onUpdateBook(elBook, bookId) {
    openUpdateDialog(bookId)
}

function onAddBook(elAdd) {
    renderAddDialog()
    const elDialog = document.querySelector('.update-dialog')
    elDialog.showModal()
}

function onReadClick(elBook, bookId) {
    renderDetailsDialog(bookId)
    const elDialog = document.querySelector('.update-dialog')
    elDialog.showModal()
}

function onReadSubmit(ev) {
    ev.stopPropagation()
}

function onAddSubmit(ev) {
    ev.stopPropagation()

    const inputName = document.getElementById('name')
    const inputPrice = document.getElementById('price')
    if (inputName.value === '' || inputPrice.value === '') {
        alert('Both values must be entered')
        return
    }
    insertBook(inputName.value, inputPrice.value)
    render()
}

function openUpdateDialog(bookId) {
    renderUpdateDialog()
    const elDialog = document.querySelector('.update-dialog')
    const elDetails = elDialog.querySelector('pre span')

    elDetails.innerText = bookId
    elDialog.showModal()
}

function onUpdateClick(ev) {
    ev.stopPropagation()

    const elDialog = document.querySelector('.update-dialog')
    const elDetails = elDialog.querySelector('pre span')
    const elInput = document.querySelector('input')

    updateBook(elInput.value, elDetails.innerText)
    elInput.value = ''
    render()
}