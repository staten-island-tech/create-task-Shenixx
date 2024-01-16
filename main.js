const DOMSelectors = {
    box: document.getElementById("container"),
    submit: document.getElementById("submitBtn"),
    submitQ: document.getElementById("questionBtn"),
    submitQuestion: document.getElementById("questionNum"),
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

    DOMSelectors.box.insertAdjacentHTML("afterbegin", `What is ${data.numberA} + ${data.numberB}`)

    DOMSelectors.box.insertAdjacentHTML("afterend", ` 
    <input type="text" id="answerInput" placeholder="Answer" data-answer=${data.numberA + data.numberB}>`);
};

getQuestion()

DOMSelectors.submitQ.addEventListener("click", function () {
    numQ = DOMSelectors.submitQuestion.value

    DOMSelectors.box.innerHTML = ""
    for (let i = 0; i < numQ; i++){
        getQuestion();
    }

});



