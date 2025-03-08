'use strict';
import "./style.css";
import  {textHome} from "./home.js";
import  {textMenu} from "./menu.js";
import  {textAbout} from "./about.js";

const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            makeTurn(event.target);   
        });
    });

const content = document.getElementById("content");
const div = document.createElement("div");
content.innerHTML = textHome;	
content.appendChild(div);

function makeTurn(button) {
    content.innerHTML = '';
    if (button.name === "home") {
        content.innerHTML = textHome;
    } else if (button.name  === "menu") {
        content.innerHTML = textMenu;
    } else if (button.name  === "about") {
        content.innerHTML = textAbout;
    }
}

