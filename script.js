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



/* 
// JSON string
let libraryData = '[{"title":"Foundation"},{"title":"Martian"}]'

// Convert JSON to a JS object:
let convertedLibraryData =  JSON.parse(libraryData)

// Loop through the object and do something with the data
for (let book of convertedLibraryData) {
    console.log(book)
    displayBookInfo(book)
}

 */


/*
    get books connects to our local server, gets data and then calls a display function to display them on the page
*/
async function getBooks() {
 
    // make a request to our server:
    let response = await fetch("http://localhost:5225/book/available")

    // assuming the request went well, we can then process the response, and get the actual data:

    let data = await response.json() // same as: JSON.parse( await response.text())
    
    // We assume all went well while getting the "data" object, and it should now be an array
    for (const book of data) {
        displayBookInfo(book)
    }
}


getBooks()