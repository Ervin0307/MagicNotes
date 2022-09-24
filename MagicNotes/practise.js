showNotes();
// console.log("efwfw")

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("title");
  let notes = localStorage.getItem("notes");
  // console.log(typeof notes);

  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let myObj = {
    title : addTitle.value,
    txt : addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  // console.log(notesObj);
  showNotes();
});

function showNotes(params) { 
    let notes = localStorage.getItem("notes");
    if (notes === null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.txt}</p>
        <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>
        `;
    });
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML= `<p>Add Notes Now!</p>`
    }
}

function deleteNote(index) {
    
    // console.log(`i delete ${index}`);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    }
    else {
      notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    
    showNotes();
}

let search = document.getElementById("search");

search.addEventListener("input", function () {

  let input = search.value.toLowerCase();
  // console.log("fored", input);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0];
    if (cardTxt.innerText.includes(input)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
  

})