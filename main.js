const DOMSelectors = {
    box: document.getElementById("container"),

};

function getNumber(){
    let numberA = Math.floor(Math.random() * 1000);
    let numberB = Math.floor(Math.random() * 1000);
    // console.log("what is", numberA, "+", numberB);

    return {
        numberA: numberA,
        numberB: numberB,
    }
};

function getQuestion(){
    let data = getNumber();
    // console.log(data.numberA);

    DOMSelectors.box.innerHTML(data);
}

getQuestion();