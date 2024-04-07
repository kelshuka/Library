
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


//const theHobbit = addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'nO');

console.log(myLibrary);

//const theWoman = addBookToLibrary('The Woman', 'Sr. Sarah', 300, 'yes');
//const Brain = addBookToLibrary('Brain', 'P.H Jas', 100, 'yes');

let fer = appendToCard(myLibrary);

const myForm = document.querySelector('#myForm');
const butN = document.querySelector('button');

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const titl = document.querySelector("#title").value;
    const auth = document.querySelector("#author").value;
    const nuM = document.querySelector("#numPa").value;
    const yS = document.querySelector("#yes").checked;

    let yN = '';
    if (yS == true) yN = 'read';
    else yN= 'unread';
    //const noS = document.querySelector("#no").value;

    let fer2 = addBookToLibrary(titl, auth, nuM, yN);
    console.log(fer2);
    appendToCard(fer2);
    myLibrary = myLibrary.splice(0, myLibrary.length);
    
});

function changeStat() {
    let toggle_read = document.createElement('button')
        toggle_read.className = "toggle_read"
        const yS = document.querySelector("#yes").checked;
        if (yS){
            toggle_read.textContent = "unread"
        }
        else{
            toggle_read.textContent = "read"
        }
        toggle_read.addEventListener("click", ()=>{
            if (yS){
                yS= false
            }
            else {
                yS = true
            }
        })
        //book_div.append(toggle_read)
        //shielf.append(book_div)
    
}

//let fer1 = appendToCard(myLibrary);
//console.log(fer);

