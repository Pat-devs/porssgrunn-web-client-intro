// 1. get the container element:
let booksContainerElement = document.getElementById("books-container")


// 2. display some new html content:

// Display the given book in the booksContainerElement
function displayBookInfo(bookObject) {

    let title = bookObject.title

    booksContainerElement.innerHTML += 
        `<div class="book-container">
            <h2>Title: ${title}</h2>
        </div>
        `
}




// JSON string
let libraryData = '[{"title":"Foundation"},{"title":"Martian"}]'

// Convert JSON to a JS object:
let convertedLibraryData =  JSON.parse(libraryData)

// Loop through the object and do something with the data
for (let book of convertedLibraryData) {
    console.log(book)
    displayBookInfo(book)
}









//console.log(libraryData)