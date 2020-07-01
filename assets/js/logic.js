var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;


var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");


function startQuiz() {
//hide stat screen and show elements div

timerId = setInterval(clockTick, 1000);
timerEl.textContent = time;
getQuestion();

};

function clockTick() {
    time--
    timerEl.textContent = time;
    if (time <= 0 ){
        quizEnd();
    }

};

function getQuestion() {
var currentQuestion = questions[currentQuestionIndex];
var titleEl = document.getElementById("question-title");
titleEl.textContent = currentQuestion.title;
choicesEl.innerHTML = "";
currentQuestion.choices.forEach(function(choice){

    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice"); //this is optional for style
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = choice;
    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);

})
};

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer){
        time -= 15;//time = time -15
        if(time < 0){
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";
        //if you want to do sound effects insert here
    }else{
        feedbackEl.textContent = "Right!"
        //sound effect
    }
    currentQuestionIndex++
    if(currentQuestionIndex === questions.length){
        quizEnd()
    }else{
        getQuestion()

    };
    
};

function quizEnd() {
    clearInterval(timerId);
    //where you can hide questions and show end screen
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
};
//if you want to make a function to save high score to local storage

startBtn.onclick = startQuiz