'use strict'

const ARROW_DOWN='⬇'
const CLEAR_SERCH='✖'

function onInit() {
    render(getBooks())
}

function onRemoveBook(elBook, bookId) {
    removeBook(bookId)
    render(getBooks())
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
    render(getBooks())
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
    render(getBooks())
}

function onSortByTitle(elTitle){

    (elTitle.innerText===ARROW_DOWN) ? elTitle.innerText=CLEAR_SERCH :elTitle.innerText=ARROW_DOWN



}

function onSortByPrice(elPrice){
    (elTitle.innerText===ARROW_DOWN) ? elTitle.innerText=CLEAR_SERCH :elTitle.innerText=ARROW_DOWN
}