//
const cards_container = document.getElementById("cards_container")
const newbook_btn = document.querySelector('.new_book')
const form_container = document.querySelector('.form_container')



const myLibrary = []
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = "Read" 
    this.id = crypto.randomUUID()

  

}

Book.prototype.hasRead = function() {
        this.read = this.read === "Read" ? "Not Read" : "Read";
    }

function addBookToLibrary(title, author, pages, read) {
const newBook = new Book(title, author, pages, read);
myLibrary.push(newBook)
}

const book1 = new Book('ego is the enemy', 'ryan holiday', 200, 'yes')
const book2 = new Book('pragmaic thinking', 'alex hunt', 312, 'no')
const book3 = new Book('as a man thinkth', 'james allen', 100, 'yes')


myLibrary.push(book1, book2, book3)
// console.log(myLibrary)


// Write a function that loops through the array
//  and displays each book on the page.
//   You can display them in some sort of table, or each on their own “card”. 
//   It might help
//  for now to manually add a few books to your array so you can see the display. 

function displayBooks(myLibrary) {
    // loop over cards 
    // make cards then add to cards_container 
    cards_container.innerText = ''
    for (let book of myLibrary) {
        const card = document.createElement('div')
        const title = document.createElement('p')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        const read  = document.createElement('p')
        const read_status = document.createElement('button')
        read_status.innerText = 'update read'
        read_status.dataset.read_status = book.read
        const removebtn = document.createElement('button')
        removebtn.innerText = 'remove book'
        removebtn.dataset.id = book.id
        card.className = "card"
        title.className = 'title'
        author.className = 'author'
        pages.className = 'pages'
        read.className = 'read'
        title.innerText = book.title
        author.innerText = book.author
        pages.innerText = book.pages
        read.innerText = book.read
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(read)
        card.appendChild(read_status)
        card.appendChild(removebtn)
        cards_container.append(card)
        

        removebtn.addEventListener('click', (e) =>  {
            const id = e.target.dataset.id
            myLibrary = myLibrary.filter(book => book.id != id)
            displayBooks(myLibrary)
        })

        read_status.addEventListener('click', (e) => {
           book.hasRead()
           displayBooks(myLibrary)
        })
        
    }

    

   
 
}



function displayForm() {
/*
plan
add event listener when clicked show form
get forms container html element
add forms through dom 
 
*/

let form = document.createElement('form')
let authorInput = document.createElement('input')
authorInput.id = "authorInput"
let authorLabel = document.createElement('label')
authorLabel.htmlFor = "authorInput"
authorLabel.innerText = " Author"

let titleInput = document.createElement('input')
titleInput.id = "titleInput"
let titleLabel = document.createElement('label')
titleLabel.htmlFor = "titleInput"
titleLabel.innerText = " Title"

let pagesInput = document.createElement('input')
pagesInput.id = "pagesInput"
let pagesLabel = document.createElement('label')
pagesLabel.htmlFor = "pagesInput"
pagesLabel.innerText = " Pages"

let readInput = document.createElement('input')
readInput.id = "readInput"
readInput.type = "checkbox"
let readLabel = document.createElement('label')
readLabel.htmlFor = "readInput"
readLabel.innerText = " have read book"

let submitBtn = document.createElement('button')
submitBtn.type = 'submit'
submitBtn.id = "submitBtn"
submitBtn.innerText = "submit"

form.appendChild(authorInput)
form.appendChild(authorLabel)
form.appendChild(titleInput)
form.appendChild(titleLabel)
form.appendChild(pagesInput)
form.appendChild(pagesLabel)
form.appendChild(readInput)
form.appendChild(readLabel)
form.appendChild(submitBtn)

form.addEventListener('submit', stopSubmit)

form_container.appendChild(form)


}


function stopSubmit(event) {
    console.log("not submitting :)")
    console.log()
    event.preventDefault()

  const author = document.getElementById('authorInput').value;
  const title = document.getElementById('titleInput').value;
  const pages = document.getElementById('pagesInput').value;
  const read = document.getElementById('readInput').checked ? 'yes' : 'no';


  addBookToLibrary(title, author, pages, read)
  displayBooks(myLibrary)
  event.target.closest('form').reset();

  


}

newbook_btn.addEventListener('click', displayForm) 


const book4 = new Book('mythos', 'stephen fry', 220, 'no')
myLibrary.push(book4)

displayBooks(myLibrary)

