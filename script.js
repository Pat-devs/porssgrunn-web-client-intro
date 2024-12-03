// 1. get the container elements:
let booksContainerElement = document.getElementById("books-container")
let borrowBookInfoContainerElement = document.getElementById("borrow-book-info-container")

let borrowBookInputElement = document.getElementById("borrow-book-input-name")
let borrowBookButtonElement = document.getElementById("borrow-book-button")

// the readInput click event handler function invokes  several functions:
// 1. borrowBook
//    which invokes displayBookLoanRequestInfo
//                  which displays book info on the page
function readInput() {
    
    borrowBook(borrowBookInputElement.value)
}


borrowBookButtonElement.onclick = readInput

// <button onclick="count()">

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


//getBooks()


// Display if hte given books is available for rent or not
function displayBookLoanRequestInfo(title) {

    borrowBookInfoContainerElement.innerHTML += 
        `<h2>${title} is available</h2>`
}

// borrowBook takes a "book title" as argument, and then displays if the book is available for rent or not

async function borrowBook(title) {

    // searchTermObject contains the title (which we get from this function's parameter)
    let searchTermObject = {
        Title: title
    }

    let response = await fetch("http://localhost:5225/loan/borrow", {
        method: "POST",
        body: JSON.stringify(searchTermObject),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(response)
    // assuming request above went well, get the data...
    let data = await response.json()

    //console.log(data)
    displayBookLoanRequestInfo(data.title)
}

//borrowBook("Foundation")