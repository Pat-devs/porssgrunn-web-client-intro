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

let libraryArray = [
    {
        title: "Foundation"
    },
    {
        title: "Martian"
    },
    {
        title: "1984"
    }
]

for (let book of libraryArray) {
    console.log(book)
    displayBookInfo(book)
}


//displayBookInfo()


//displayBookInfo(libraryArray[0])
//displayBookInfo(libraryArray[1])




/* 
    <div class="book-container">
        <h2>Title: Whatever title</h2>
    </div>


    <div class="book-container">
        <h2>Title: Whatever other title</h2>
    </div>
*/












let libraryData = '[{"title":"Foundation"},{"title":"Martian"}]'


//console.log(libraryData)