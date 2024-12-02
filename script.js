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

let libraryData = '[{"title":"Foundation"},{"title":"Martian"}]'

let convertedLibraryData =  JSON.parse(libraryData)


//console.log(convertedLibraryData)


const arrayOfObjects = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      occupation: "Engineer",
      stuff: `doSomething() {
        console.log("Working")
      }`
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      occupation: "Designer",
    },
    {
      id: 3,
      name: "Charlie",
      age: 28,
      occupation: "Teacher",
    },
    {
      id: 4,
      name: "Diana",
      age: 22,
      occupation: "Developer",
    },
  ];


  console.log(arrayOfObjects)
  

  let convertedArrayOfObjects = JSON.stringify(arrayOfObjects)

  console.log(convertedArrayOfObjects)

  console.log( JSON.parse(convertedArrayOfObjects))


  convertedArrayOfObjects[0].doSomething()


/* for (let book of libraryArray) {
    console.log(book)
    displayBookInfo(book)
} */









//console.log(libraryData)