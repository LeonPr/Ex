


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
                    <button class="update" onclick="onReadClick( this,${book.id})">Update</button>
                    <button class="delete" onclick="onReadClick( this,${book.id})">Delete</button>
                </td></tr>`)
    elBook.innerHTML = strHTML.join('')

}