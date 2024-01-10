const DOMSelectors = {
    box: document.getElementById("box"),

};

function getNumber(){
    let number = Math.floor(Math.random() * 1000);
    DOMSelectors.box.insertAdjacentHTML("afterbegin", `<h2>${number}</h2>`);
};

getNumber();