const DOMSelectors = {
    box: document.getElementById("container"),
    submit: document.getElementById("submitBtn"),
    submitAmount: document.getElementById("submitAmount"),
    numberOfQuestion: document.getElementById("numberOfQuestion"),
    answerInputs: document.getElementsByClassName("answerInput"),
};

const questions = [];
const userAnswers = [];

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
    <input type="text" class="answerInput" placeholder="Answer" data-answer=${data.numberA + data.numberB}> 
    <br><br>`);
};


DOMSelectors.submitAmount.addEventListener("click", function () {
    numOfQ = DOMSelectors.numberOfQuestion.value
    DOMSelectors.box.innerHTML = "";

    for (let i = 0; i < numOfQ; i++){
        const num = getNumber();
        questions.push(num);
    }

    questions.forEach((question)=>{
        display(question);
    })
    
    return questions;
});


DOMSelectors.submit.addEventListener("click", function(){  
    for (let i = 0; i < DOMSelectors.answerInputs.length; i++) {
        let userAnswer = DOMSelectors.answerInputs[i].value;
        userAnswers.push(userAnswer);
    }

    console.log(questions);
    console.log(userAnswers);
})



