'use strict'

var gBooks=[
    {id:'b00',title:'The Adventures of Lori Ipsi',price:120},
    {id:'b01',title:'Word Atlas',price:120},
    {id:'b02',title:'Zorba The Greek',price:120},
]


function getBooks(){
        return gBooks
}
function RemoveBook(bookId){
    const delIndx=gBooks.findIndex(book => gBooks.id===bookId)
    gBooks.splice(delIndx,1)
}