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
let libraryData = '[{"title":"Foundation"},{"title":"Martian"}]'

let convertedLibraryData =  JSON.parse(libraryData)


//console.log(convertedLibraryData[0].title)



for (let book of convertedLibraryData) {
    console.log(book)
    displayBookInfo(book)
}

//console.log(libraryData) */


// Get some data from a url 

// Display the given book in the booksContainerElement
function displayUserInfo(userObject) {

    let title = userObject.name

    booksContainerElement.innerHTML += 
        `<div class="book-container">
            <h2>Title: ${title}</h2>
        </div>
        `
}

// Using the most modern "async function"





// https://jsonplaceholder.typicode.com/users
async function getData() {
    // make a fetch-request to an API url, and store the response in a variable
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    // get the response data:
    let data = await response.text()

    //console.log(data)

    for (let user of data) {
        console.log(user)
        displayUserInfo(user)
    }
}

getData()