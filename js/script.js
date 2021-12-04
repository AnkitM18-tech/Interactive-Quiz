var questions = [{
    question:"What is the baby of a Moth known as?",
    choices: ['baby','infant','larva','kit'],
    correctAnswer : 2
},{
    question:"What is the adult of a kid called?",
    choices: ['calf','doe','goat','chick'],
    correctAnswer : 2
},{
    question:"What is the baby of a Buffalo known as?",
    choices: ['calf','infant','pup','cow'],
    correctAnswer : 0
},{
    question:"What is a baby Aligator called?",
    choices: ['baby','gator','hatchling','calf'],
    correctAnswer : 2
},{
    question:"What is a baby Goose called?",
    choices: ['gooser','looser','gosling','gup'],
    correctAnswer : 2
},{
    question:"What is a baby Hamster called?",
    choices: ['pup','chick','hatchling','calf'],
    correctAnswer : 0
},{
    question:"What is a baby Hawk called?",
    choices: ['hawklet','pup','larv','eyas'],
    correctAnswer : 3
},{
    question:"What is a baby Grasshopper called?",
    choices: ['hopper','nymph','pup','eyas'],
    correctAnswer : 1
},{
    question:"What is a baby Kangaroo called?",
    choices: ['kinga','joey','calf','baby'],
    correctAnswer : 1
},{
    question:"What is a baby Whale called?",
    choices: ['whala','cub','grub','infant'],
    correctAnswer : 1
},{
    question:"What is a baby Monkey called?",
    choices: ['infant','pup','larv','calf'],
    correctAnswer : 0
},{
    question:"What is a baby Bear called?",
    choices: ['baby baloo','pup','cub','bearlet'],
    correctAnswer : 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on('click',function(){
        if(!quizOver){
            value = $('input[type="radio"]:checked').val();
            if(value==undefined){
                $(document).find('.quizMessage').text('Please Select an Answer');
                $(document).find('.quizMessage').show();
            } else {
                $(document).find('.quizMessage').hide();
                if(value==questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion<questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find('.nextButton').text("Play Again!");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find('.nextButton').text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion(){
    console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // set questionClass text to current question
    $(questionClass).text(question);
    // remove all current <li> elements if any
    $(choiceList).find("li").remove()

    var choice;
    for(i=0;i<numChoices;i++){
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore(){
    $(document).find(".quizContainer > .result").text("You scored: "+correctAnswers+ " out of: "+questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore(){
    $(document).find('.result').hide();
}