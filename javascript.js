
const myLibrary = [];

function Book(title, author, pages, bookRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookRead = bookRead;
    
}

  
function addBookToLibrary(ti, au, pa, bR) {
    const newBook = new Book(ti,au,pa,bR);
    myLibrary.push(newBook);
    return myLibrary;
}

const tab = document.querySelector('.tab');
const columns = ['Title','Author(s)','Pages','Status'];
//var posts_array = JSON.parse(xhr.responseText);



function appendToCard(arry) {
    for (let i=0; i < arry.length; i++) {
        let row = tab.insertRow(-1);
        let objArray = arry[i];
        let arrKeys = Object.values(objArray);
        
        for (let j=0; j< columns.length; j++) {
            let cell = row.insertCell(-1);
            cell.className = columns[j];
            cell.innerHTML = arrKeys[j];
            
            
            
        }
    }
}

const theHobbit = addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'nO');

console.log(theHobbit);
console.log(myLibrary);

const theWoman = addBookToLibrary('The Woman', 'Sr. Sarah', 300, 'yes');
const Brain = addBookToLibrary('Brain', 'P.H Jas', 100, 'yes');



console.log(myLibrary[1]);
console.log(Object.keys(myLibrary[1]));

let fer = appendToCard(myLibrary);
console.log(fer);

