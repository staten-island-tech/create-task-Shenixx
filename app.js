import {DOMSelectors} from "./dom";

function getNumber(){
    let number = Math.floor(Math.random() * 1000);
    DOMSelectors.box.insertAdjacentHTML("afterbegin", `${number}`);
};

getNumber();