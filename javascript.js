
const myLibrary = [];
const tbody = document.querySelector('tbody');

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    
}

 
function addBookToLibrary(ti, au, pa) {
    const newBook = new Book(ti,au,pa);
    myLibrary.push(newBook);
    return myLibrary;
}

const tab = document.querySelector('.tab');
const columns = ['Title','Author(s)','Pages','Status'];



function appendToCard(arry) {

    for (let i=0; i < arry.length; i++) {
        let row = tab.insertRow(-1);
        let objArray = arry[i];
        let arrKeys = Object.values(objArray);
        
        for (let j=0; j< columns.length-1; j++) {
            let cell = row.insertCell(-1);
            cell.className = columns[j];
            cell.innerHTML = arrKeys[j];
            
        }
        let cell = row.insertCell(-1);
        cell.className = columns[3];
        const readToggle = document.createElement("button");
        readToggle.textContent = "read";

        readToggle.addEventListener('click',() => {
            if (readToggle.textContent =="read") {
                readToggle.textContent = "unread";
            } else {
                readToggle.textContent = "read";
                }
        })

        cell.append(readToggle)
        
    }
   
}


const myForm = document.querySelector('#myForm');
const butN = document.querySelector('button');

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const titl = document.querySelector("#title").value;
    const auth = document.querySelector("#author").value;
    const nuM = document.querySelector("#numPa").value;
    const yS = document.querySelector("#yes").checked;

   
    let fer2 = addBookToLibrary(titl, auth, nuM);
    console.log(fer2);
    appendToCard(fer2);
    


    myLibrary.splice(0, myLibrary.length);
    
    
});


const theHobbit = addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295);
let fer = appendToCard(myLibrary);
myLibrary.splice(0, 1);



const books = document.getElementById('books');

const bookDiv = document.createElement("div");
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "delete book?"; 
bookDiv.append(deleteBtn);
books.append(bookDiv);
deleteBtn.addEventListener('click', () => {
    let i = +prompt("starting from 1, what book index number do you want to delete?",)
    tab.deleteRow(i);
            
});


const clr = document.querySelector('#clr');

clr.addEventListener('click', ()=> {
    myForm.reset();
})



