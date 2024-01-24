// Gomb kiválasztása az azonosítója alapján
var createNewElementButton = document.getElementById("createNewElement");

// div elem kiválasztása az azonosítója alapján
var existingElement = document.getElementById("existingElement");

// Gomb eseménykezelő hozzáadása
createNewElementButton.addEventListener("click", function() {
    
    var newDiv = document.createElement("div");

    //tartalom beállítás
    newDiv.innerHTML = "New element"; 

    
    newDiv.style.backgroundColor = "lightblue";
    newDiv.style.padding = "10px";
    newDiv.style.marginLeft = "40%";
    newDiv.style.width="20%";
    newDiv.style.backgroundColor = "red";
   
    document.body.appendChild(newDiv);
});


var modifyElementButton = document.getElementById("modifyElement");

var myDiv = document.getElementById("myDiv");

// Gomb eseménykezelő hozzáadása
modifyElementButton.addEventListener("click", function() {

    // Meglévő div elem tartalmának módosítása
    myDiv.style.color = "red"; // Beállítjuk a színét pirosra
    myDiv.innerHTML = "this elem modified"; // Módosítjuk a tartalmát
});