'use strict'

const ARROW_DOWN = '⬇'
const CLEAR_SERCH = '✖'

function onInit() {
    render(getBooks())
    refreshStats()
}

function onRemoveBook(elBook, bookId) {
    removeBook(bookId)
    render(getBooks())
    successMsg()
    refreshStats()
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
    successMsg()
    refreshStats()
}

function successMsg(){
    renderSuccessDialog()
    const elDialog = document.querySelector('.update-dialog')
    elDialog.showModal()
    setTimeout(closeDialog,2000)
}

function closeDialog(){
    const elDialog = document.querySelector('.update-dialog')
    elDialog.close()
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
    const elInput = elDialog.querySelector('input')

    updateBook(elInput.value, elDetails.innerText)
    elInput.value = ''
    render(getBooks())
    successMsg()
    refreshStats()
}

function onSortByTitle(elTitle) {
    if (elTitle.innerText === ARROW_DOWN) {
        elTitle.innerText = CLEAR_SERCH
        const booksData = getBooks()
        const sortedBooks = booksData.map(book => { return book })
            .sort((book1, book2) => book1.title.toLowerCase().localeCompare(book2.title.toLowerCase()))
        render(sortedBooks)
    } else {
        elTitle.innerText = ARROW_DOWN
        render(getBooks())
    }
}

function onSortByPrice(elPrice) {
    if (elPrice.innerText === ARROW_DOWN) {
        elPrice.innerText = CLEAR_SERCH
        const booksData = getBooks()
        const sortedBooks = booksData.map(book => { return book })
            .sort((book1, book2) => book1.price - book2.price)
        render(sortedBooks)
    } else {
        elPrice.innerText = ARROW_DOWN
        render(getBooks())
    }
}
function onFilterInput() {
    const booksData = getBooks()
    const elFilter = document.querySelector('input')
    const filteredBooks = booksData.filter( book => (book.title.includes(elFilter.value)))

    if(filteredBooks.length !== 0){
        render(filteredBooks)
    }else{
        renderNotFound() 
    }

}
function onCancelFilter(){
    document.querySelector('input').value=''
    render(getBooks())
}
function refreshStats() {
    const elExpensive = document.querySelector('.expensive')
    const expensiveBooks = getExpensiveBooks()
    elExpensive.innerText = expensiveBooks.length
    
    const elCheap = document.querySelector('.cheap')
    const cheapBooks = getCheapBooks()
    elCheap.innerText = cheapBooks.length

    const elAverage = document.querySelector('.average')
    const averageBooks = getAverageBooks()
    elAverage.innerText = averageBooks.length
}
function onRatingInput(ev,bookId){
    ev.stopPropagation()

    const elDialog = document.querySelector('.update-dialog')
    const elInput = elDialog.querySelector('input')

    RatingInput(elInput.value,bookId)
    //console.log('book id', bookId);
    //console.log('elInput.value', elInput.value);
}