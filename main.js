const DOMSelectors = {
    box: document.getElementById("container"),
    result: document.getElementById("results"),
    submit: document.getElementById("submitBtn"),
    submitAmount: document.getElementById("submitAmount"),
    numberOfQuestion: document.getElementById("numberOfQuestion"),
    answerInputs: document.getElementsByClassName("answerInput"),
};

const questions = [];
const userAnswers = [];
const answerKey = [];

function clearAll(){
    userAnswers = []
    questions = []
    answerKey = []
    DOMSelectors.box.innerHTML = "";
    DOMSelectors.result.innerHTML = "";
}

function getNumber(){
    let numberA = Math.floor(Math.random() * 1000);
    let numberB = Math.floor(Math.random() * 1000);
    return {
        numberA: numberA,
        numberB: numberB,
    }
};

function display(data){
    DOMSelectors.box.insertAdjacentHTML("beforeend", `What is ${data.numberA} + ${data.numberB}`)
    DOMSelectors.box.insertAdjacentHTML("beforeend", ` 
    <input type="text" class="answerInput" placeholder="Answer"> 
    <br><br>`);
    let answers = data.numberA + data.numberB
    answerKey.push(Number(answers));
};


DOMSelectors.submitAmount.addEventListener("click", function () {
    clearAll()
    numOfQ = DOMSelectors.numberOfQuestion.value;
    for (let i = 0; i < numOfQ; i++) {
        let num = getNumber();
        questions.push(num);
    }
    questions.forEach((question) => {
        display(question);
    });
    return questions;
});

let checkAnswers = function (arr1, arr2, arr3) {
    let wrong = 0;
    let right = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            right++;
            DOMSelectors.result.insertAdjacentHTML(
                "beforeend",
                `You got ${arr3[i].numberA} + ${arr3[i].numberB} = ${arr3[i].numberA + arr3[i].numberB} right. You got ${arr2[i]}<br>`
            );
        } else {
            wrong++;
            DOMSelectors.result.insertAdjacentHTML(
                "beforeend",
                `You got ${arr3[i].numberA} + ${arr3[i].numberB} = ${arr3[i].numberA + arr3[i].numberB} wrong. You got ${arr2[i]}<br>`
            );
        }
    }
    let percent = right/ (right + wrong) * 100
    DOMSelectors.result.insertAdjacentHTML("beforeend", `You got ${right} right and ${wrong} wrong with a ${percent}% accuracy`);
};

DOMSelectors.submit.addEventListener("click", function(){  
    DOMSelectors.result.innerHTML = ""
    for (let i = 0; i < DOMSelectors.answerInputs.length; i++) {
        let userAnswer = DOMSelectors.answerInputs[i].value;
        userAnswers.push(Number(userAnswer));
    }
    checkAnswers(answerKey,userAnswers,questions); 
})