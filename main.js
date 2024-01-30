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
const answersB = [];

function getNumber(){
    let numberA = Math.floor(Math.random() * 1000);
    let numberB = Math.floor(Math.random() * 1000);
    // console.log("what is", numberA, "+", numberB);

    return {
        numberA: numberA,
        numberB: numberB,
    }
};

function display(data){
    // console.log(data.numberA);
    DOMSelectors.box.insertAdjacentHTML("beforeend", `What is ${data.numberA} + ${data.numberB}`)

    DOMSelectors.box.insertAdjacentHTML("beforeend", ` 
    <input type="text" class="answerInput" placeholder="Answer"> 
    <br><br>`);

    let answers = data.numberA + data.numberB
    answersB.push(Number(answers));
};


DOMSelectors.submitAmount.addEventListener("click", function () {
    numOfQ = DOMSelectors.numberOfQuestion.value;
    
    userAnswers.length = 0
    questions.length = 0;
    DOMSelectors.box.innerHTML = "";
    

    for (let i = 0; i < numOfQ; i++) {
        const num = getNumber();
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

    DOMSelectors.result.insertAdjacentHTML("beforeend", `you got ${right} right and ${wrong} wrong`);
};

DOMSelectors.submit.addEventListener("click", function(){  
    for (let i = 0; i < DOMSelectors.answerInputs.length; i++) {
        let userAnswer = DOMSelectors.answerInputs[i].value;
        userAnswers.push(Number(userAnswer));

    }

    // console.log(answersB);
    // console.log(userAnswers);


    checkAnswers(answersB,userAnswers,questions);
})



