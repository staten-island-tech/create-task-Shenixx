const DOMSelectors = {
    box: document.getElementById("container"),
    submit: document.getElementById("submitBtn"),
    submitAmount: document.getElementById("submitAmount"),
    numberOfQuestion: document.getElementById("numberOfQuestion"),
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

function display(data){
    // console.log(data.numberA);
    DOMSelectors.box.insertAdjacentHTML("beforeend", `What is ${data.numberA} + ${data.numberB}`)

    DOMSelectors.box.insertAdjacentHTML("beforeend", ` 
    <input type="text" id="answerInput" placeholder="Answer" data-answer=${data.numberA + data.numberB}> 
    <br><br>`);
};

DOMSelectors.submitAmount.addEventListener("click", function () {
    numQ = DOMSelectors.numberOfQuestion.value
    DOMSelectors.box.innerHTML = ""

    const questions = [];
    

    for (let i = 0; i < numQ; i++){
        const num = getNumber();
        questions.push(num);
    }

    questions.forEach((question)=>{
        display(question);
    })
});


DOMSelectors.submit.addEventListener("click", function(){

})



