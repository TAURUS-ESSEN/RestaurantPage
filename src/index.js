'use strict';
import "./style.css";
import  {textHome} from "./home.js";
import  {textMenu} from "./menu.js";
import  {textAbout} from "./about.js";

console.log("Hello World from your main file!");

const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            makeTurn(event.target);   
        });
    });

const content = document.getElementById("content");
const div = document.createElement("div");
content.innerHTML = textHome;	
content.appendChild(div)

    function makeTurn(button) {
        content.innerHTML = '';
        console.log(`Нажата кнопка: ${button.name}`);
        if (button.name === "home") {
            content.innerHTML = textHome;
            console.log("Загружаем модуль Home...");
     
        } else if (button.name  === "menu") {
            content.innerHTML = textMenu;
            console.log("Загружаем модуль Menu...");
        } else if (button.name  === "about") {
            content.innerHTML = textAbout;
            console.log("Загружаем модуль About...");
        }
    }
 

