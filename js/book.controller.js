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

function onRemoveBook(elBook, bookId) {
    RemoveBook(bookId)
    render()
}

function onUpdateBook(elBook, bookId) {
    openUpdateDialog(bookId)
}

function onAddBook(elAdd) {

    const elInput = document.querySelectorAll('.new-book')
    elInput.forEach(elem => {
        if (elem.style.display === 'none') elem.style.display = 'Inline-Block'
        else elem.style.display = 'none'
    })
}
function onAddSubmit(ev) {
    ev.stopPropagation()

    const inputName = document.getElementById('name')
    const inputPrice = document.getElementById('price')
    console.log('inputName', inputName.value === '');
    console.log('inputPrice', inputPrice.value === '');
    if (inputName.value === '' || inputPrice.value === '') {
        alert('Both values must be entered')
        return
    }
    insertBook(inputName.value,inputPrice.value)
    render()
}
function openUpdateDialog(bookId) {

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