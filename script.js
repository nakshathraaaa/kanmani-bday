function openLetter(){

    document
    .getElementById("letterPopup")
    .classList.add("show");
}

function closeLetter(){

    document
    .getElementById("letterPopup")
    .classList.remove("show");
}

/* QUIZ PANEL */

function openQuiz(){

    document
    .getElementById("quizPanel")
    .classList.add("show");
}

/* LOVE QUESTION */

function wrongAnswer(){

    alert("invalid option. I know you love me 😒");
}

/* QUIZ DATA */

const quizData = [

{
    image:"images/q1.jpg",

    question:"WHAT ARE YOU DOING?",

    options:[
        "Watching something useful",
        "Watching a movie",
        "Talking with chatgpt"
    ],

    correct:2
},

{
    image:"images/q2.jpg",

    question:"You when?",

    options:[
        "before dinner",
        "after dinner"
    ],

    correct:1
},

{
    image:"images/q3.jpg",

    question:"Guess what u r doing",

    options:[
        "studying",
        "writing a song",
        "playing with your sketch pens"
    ],

    correct:2
},

{
    image:"images/q4.jpg",

    question:"You and who?",

    options:[
        "duck",
        "me"
    ],

    correct:1
}

];

let currentQuestion = 0;

let score = 0;

/* START QUIZ */

function startQuiz(){

    const quizBox = document.querySelector(".quiz-box");

    quizBox.innerHTML = `
        <h2 class="quiz-question">
            i love you too... u may play! 🎀
        </h2>
    `;

    setTimeout(()=>{

        loadQuestion();

    },1500);
}

/* LOAD QUESTION */

function loadQuestion(){

    const data = quizData[currentQuestion];

    const quizBox = document.querySelector(".quiz-box");

    let optionsHTML = "";

    data.options.forEach((option,index)=>{

        optionsHTML += `
            <button class="option-btn"
            onclick="checkAnswer(${index})">
                ${option}
            </button>
        `;
    });

    quizBox.innerHTML = `
    
        <img src="${data.image}" class="quiz-image">

        <h2 class="quiz-question">
            ${data.question}
        </h2>

        <div class="quiz-options">
            ${optionsHTML}
        </div>
    `;
}

/* CHECK ANSWER */

function checkAnswer(selected){

    const correct =
    quizData[currentQuestion].correct;

    const buttons =
    document.querySelectorAll(".option-btn");

    buttons.forEach((button,index)=>{

        button.disabled = true;

        if(index === correct){

            button.classList.add("correct");
        }

        if(index === selected && selected !== correct){

            button.classList.add("wrong");
        }
    });

    if(selected === correct){

        score++;
    }

    setTimeout(()=>{

        currentQuestion++;

        if(currentQuestion < quizData.length){

            loadQuestion();

        }else{

            showFinalScore();
        }

    },1200);
}

/* FINAL SCORE */

function showFinalScore(){

    let message = "";

    if(score === 4){

        message =
        "YAYYY YOU EARNED 100 KISSES FROM ME!😭💖";
    }

    else if(score >= 2){

        message =
        "acceptable levels of friendship achieved 👍";
    }

    else{

        message =
        "fake friend detected 🚨";
    }

    document.querySelector(".quiz-box").innerHTML = `

        <h2 class="quiz-question">
            you got ${score}/4 correct 🎀
        </h2>

        <br>

        <h2 class="quiz-question">
            ${message}
        </h2>
    `;
}

/* MUSIC */

function toggleMusic(){

    const music =
    document.getElementById("bgMusic");

    if(music.paused){

        music.play();

    }else{

        music.pause();
    }
}