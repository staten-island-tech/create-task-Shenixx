const DOMSelectors = {
    box: document.getElementById("container"),
    submit: document.getElementById("submitBtn"),
    submitAmount: document.getElementById("submitAmount"),
    numberOfQuestion: document.getElementById("numberOfQuestion"),
    answerInputABC: document.getElementById("answerInput")
};

const questions = [];
const answers = [];

function getNumber(){
    let numberA = Math.floor(Math.random() * 1000);
    let numberB = Math.floor(Math.random() * 1000);
    // console.log("what is", numberA, "+", numberB);
    
    let answer = numberA + numberB
    // console.log(answer)
    answers.push(answer);

    return {
        numberA: numberA,
        numberB: numberB,
    }
};

function display(data){
    // console.log(data.numberA);
    DOMSelectors.box.insertAdjacentHTML("beforeend", `What is ${data.numberA} + ${data.numberB}`)

    DOMSelectors.box.insertAdjacentHTML("beforeend", ` 
    <input type="text" id="answerInput" placeholder="Answer" data-answer=${data.numberA + data.numberB}> 
    <br><br>`);
    
    console.log(DOMSelectors.answerInputABC)
};




DOMSelectors.submitAmount.addEventListener("click", function () {
    numOfQ = DOMSelectors.numberOfQuestion.value
    DOMSelectors.box.innerHTML = ""

    for (let i = 0; i < numOfQ; i++){
        const num = getNumber();
        questions.push(num);
    }

    questions.forEach((question)=>{
        display(question);
    })
    


    return questions
});


DOMSelectors.submit.addEventListener("click", function(){
    console.log(questions);
    console.log(answers)
    
    
})



