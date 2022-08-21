/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("const container = document.querySelector('.container');\r\n allChar();\r\n\r\n\r\n function allChar() {\r\n fetch(\"https://rickandmortyapi.com/api/character\")\r\n .then((res) => res.json())\r\n .then((data) => {\r\n   for(var i = 0; i < 10; i++) {\r\n    container.innerHTML += drawCharacter(data.results[i]);\r\n   }\r\n   //container.innerHTML =  data.results.map((char) => drawCharacter(char)).join(\"\");\r\n })\r\n }\r\n\r\n\r\n\r\n\r\n const drawCharacter = (char) => {\r\n    return `\r\n   <div class=\"character-card\">\r\n  <h3 class=\"character-name\">${char.name}</h3>\r\n   <img class=\"character-img\" src=\"${char.image}\">\r\n   <div class=\"character-info\">\r\n     <span class=\"character-data\">${char.species}</span>\r\n     <span class=\"character-data\">${char.status}</span>\r\n     <span class=\"character-data\">${char.gender}</span>\r\n    <span class=\"character-data\">${char.origin.name}</span>\r\n   </div>\r\n   </div>`;\r\n };\r\n\r\n\r\n\r\n// // Search Male\r\n\r\n let checkboxMale = document.getElementById('male');\r\n\r\n checkboxMale.addEventListener(\"click\", () => {\r\n  if(checkboxMale.checked === true) {\r\n     container.innerHTML = \"\";\r\n       showMale();\r\n   }\r\n   else {\r\n     container.innerHTML = \"\";\r\n     allChar();\r\n   }\r\n })\r\n\r\n// //Search Female\r\n\r\n let checkboxFemale = document.getElementById('female');\r\n\r\n checkboxFemale.addEventListener(\"click\", () => {\r\n   if(checkboxFemale.checked === true) {\r\n     container.innerHTML = \"\";\r\n       showFemale();\r\n  }\r\n   else {\r\n    container.innerHTML = \"\";\r\n    allChar();\r\n   }\r\n\r\n })\r\n\r\n// // Search status dead\r\n\r\n let checkboxDead = document.getElementById('dead');\r\n\r\n checkboxDead.addEventListener(\"click\", () => {\r\n  if(checkboxDead.checked === true) {\r\n    container.innerHTML = \"\";\r\n       showDead();\r\n  }\r\n   else {\r\n     container.innerHTML = \"\";\r\n     allChar();\r\n   }\r\n\r\n })\r\n\r\n\r\n// // Search status dead\r\n\r\n let checkboxAlive = document.getElementById('alive');\r\n\r\n checkboxAlive.addEventListener(\"click\", () => {\r\n   if(checkboxAlive.checked === true) {\r\n     container.innerHTML = \"\";\r\n       showAlive();\r\n   }\r\n  else {\r\n    container.innerHTML = \"\";\r\n     allChar();\r\n   }\r\n\r\n })\r\n\r\n\r\n\r\n// //functions\r\n function showMale() {\r\n   fetch(\"https://rickandmortyapi.com/api/character/?gender=male\")\r\n   .then((res) => res.json())\r\n   .then((data) => {\r\n    for(var i = 0; i < 10; i++) {\r\n       container.innerHTML += drawCharacter(data.results[i]);\r\n    }\r\n   })\r\n }\r\n\r\n function showFemale() {\r\n fetch(\"https://rickandmortyapi.com/api/character/?gender=female\")\r\n .then((res) => res.json())\r\n .then((data) => {\r\n   for(var i = 0; i < 10; i++) {\r\n    container.innerHTML += drawCharacter(data.results[i]);\r\n   }\r\n })\r\n }\r\n\r\n function showDead() {\r\n   fetch(\"https://rickandmortyapi.com/api/character/?status=dead\")\r\n   .then((res) => res.json())\r\n   .then((data) => {\r\n     for(var i = 0; i < 10; i++) {\r\n       container.innerHTML += drawCharacter(data.results[i]);\r\n    }\r\n   })\r\n   }\r\n\r\n function showAlive() {\r\n   fetch(\"https://rickandmortyapi.com/api/character/?status=alive\")\r\n  .then((res) => res.json())\r\n   .then((data) => {\r\n    for(var i = 0; i < 10; i++) {\r\n       container.innerHTML += drawCharacter(data.results[i]);\r\n    }\r\n   })\r\n   }\r\n\n\n//# sourceURL=webpack://version-2---with-card-renders/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;