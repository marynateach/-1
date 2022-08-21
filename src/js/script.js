const container = document.querySelector('.container');
 allChar();


 function allChar() {
 fetch("https://rickandmortyapi.com/api/character")
 .then((res) => res.json())
 .then((data) => {
   for(var i = 0; i < 10; i++) {
    container.innerHTML += drawCharacter(data.results[i]);
   }
   //container.innerHTML =  data.results.map((char) => drawCharacter(char)).join("");
 })
 }




 const drawCharacter = (char) => {
    return `
   <div class="character-card">
  <h3 class="character-name">${char.name}</h3>
   <img class="character-img" src="${char.image}">
   <div class="character-info">
     <span class="character-data">${char.species}</span>
     <span class="character-data">${char.status}</span>
     <span class="character-data">${char.gender}</span>
    <span class="character-data">${char.origin.name}</span>
   </div>
   </div>`;
 };



// // Search Male

 let checkboxMale = document.getElementById('male');

 checkboxMale.addEventListener("click", () => {
  if(checkboxMale.checked === true) {
     container.innerHTML = "";
       showMale();
   }
   else {
     container.innerHTML = "";
     allChar();
   }
 })

// //Search Female

 let checkboxFemale = document.getElementById('female');

 checkboxFemale.addEventListener("click", () => {
   if(checkboxFemale.checked === true) {
     container.innerHTML = "";
       showFemale();
  }
   else {
    container.innerHTML = "";
    allChar();
   }

 })

// // Search status dead

 let checkboxDead = document.getElementById('dead');

 checkboxDead.addEventListener("click", () => {
  if(checkboxDead.checked === true) {
    container.innerHTML = "";
       showDead();
  }
   else {
     container.innerHTML = "";
     allChar();
   }

 })


// // Search status dead

 let checkboxAlive = document.getElementById('alive');

 checkboxAlive.addEventListener("click", () => {
   if(checkboxAlive.checked === true) {
     container.innerHTML = "";
       showAlive();
   }
  else {
    container.innerHTML = "";
     allChar();
   }

 })



// //functions
 function showMale() {
   fetch("https://rickandmortyapi.com/api/character/?gender=male")
   .then((res) => res.json())
   .then((data) => {
    for(var i = 0; i < 10; i++) {
       container.innerHTML += drawCharacter(data.results[i]);
    }
   })
 }

 function showFemale() {
 fetch("https://rickandmortyapi.com/api/character/?gender=female")
 .then((res) => res.json())
 .then((data) => {
   for(var i = 0; i < 10; i++) {
    container.innerHTML += drawCharacter(data.results[i]);
   }
 })
 }

 function showDead() {
   fetch("https://rickandmortyapi.com/api/character/?status=dead")
   .then((res) => res.json())
   .then((data) => {
     for(var i = 0; i < 10; i++) {
       container.innerHTML += drawCharacter(data.results[i]);
    }
   })
   }

 function showAlive() {
   fetch("https://rickandmortyapi.com/api/character/?status=alive")
  .then((res) => res.json())
   .then((data) => {
    for(var i = 0; i < 10; i++) {
       container.innerHTML += drawCharacter(data.results[i]);
    }
   })
   }
