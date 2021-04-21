console.log("hii")

class Book {
    constructor(name, author, type) {
        this.name = name
        this.author = author
        this.type = type
    }

}



class Display {
    add(book) {
        console.log("adding")
        let tableBody = document.getElementById("tablebody")


        let innerString =

            `<tr>
               <td style="color: #ffb88c ; font-size:17px; font-weight:bold">${book.name}</td>
               <td style="color: #ffb88c ; font-size:17px; font-weight:bold">${book.author}</td>
               <td style="color: #ffb88c ; font-size:17px; font-weight:bold">${book.type}</td>
            
           </tr>`
        tableBody.innerHTML += innerString;



    }




    clear() {
        let libForm = document.getElementById("libForm")
        libForm.reset();

    }


    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, errorMessage) {
        let message = document.getElementById("message")
        let result;
        if (type == 'success') {
            result = "Success"
        }
        else {
            result = "Error"
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${result}</strong>${errorMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

        setTimeout(() => {
            message.innerHTML = ""
        }, 3000)
    }




}
let libForm = document.getElementById("libForm")
libForm.addEventListener('submit', libFormSubmit);

function libFormSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let suspense = document.getElementById('Suspense')
    let romantic = document.getElementById('Romantic')
    let forKids = document.getElementById('forKids')
    let type;
    if (suspense.checked) {
        type = suspense.value;
    }
    else if (romantic.checked) {
        type = romantic.value;
    }
    else if (forKids.checked) {
        type = "For Kids";
    }

    let book = new Book(name, author, type)
    console.log(book)
    let display = new Display();



    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been added suceessfully!')
    }
    else {

        display.show("danger", " Sorry, we were unable to able your book. Please check the validate your entries. ")
    }







}
