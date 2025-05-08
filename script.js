var popup = document.querySelector(".popup");
var popbox = document.querySelector(".popbox");
var addbutton = document.getElementById("add-button");
var cancel = document.getElementById("canceljournal");
var container = document.querySelector(".container");
var addjournal = document.getElementById("addjournal");
var place = document.getElementById("place-his");
var known = document.getElementById("known-his");
var detail = document.getElementById("s-detail"); 


addbutton.addEventListener("click", function () {
  popup.style.display = "block";
  popbox.style.display = "block";
});


cancel.addEventListener("click", function (event) {
  event.preventDefault();
  popup.style.display = "none";
  popbox.style.display = "none";
});


addjournal.addEventListener("click", function (event) {
  event.preventDefault();

  var div = document.createElement("div");
  div.setAttribute("class", "bookcont");
  div.innerHTML = `
    <h2>${place.value}</h2>
    <h5>${known.value}</h5>
    <p>${detail.value}</p>
    <button class="delete-btn">delete</button>
  `;

  container.append(div);

  
  popup.style.display = "none";
  popbox.style.display = "none";


  place.value = "";
  known.value = "";
  detail.value = "";
});

function deletebook(event){
  event.target.parentElement.remove();
}


container.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});
