"use strict"


var question, button, progress
var domQuiz = document.getElementById("quiz")

// Paleidžia klausimyną
startQuiz.addEventListener("click", start)
function start(){
    quiz.questionNumber = 0
    quiz.resultNumber = 0
    domQuiz.innerHTML =
    `
        <!-- Pavadinimas -->
            <h1>Vaisiai</h1>

            <!-- Klausimas -->
            <p id="question">Aš norėčiau Jūsų paklausti...?</p>

            <!-- Atsakymai -->
            <div class="buttons">
                <button id="pirmas">Pirmas</button>
                <button id="antras">Antras</button>
                <button id="trecias">Trečias</button>
                <button id="ketvirtas">Ketvirtas</button>
            </div>
            <hr>

            <!-- Progresas -->
            <footer>
                <p id="klaus" >Klausimas <span id="progress">1</span> iš 5</p>
            </footer>
    `
    
    question = document.getElementById("question");
    button = document.querySelectorAll("button");
    progress = document.getElementById("progress");

    // Priskiria funkciją mygtukams
    button.forEach((x) => {
        x.addEventListener("click", function(){
            setTimeout(function(){
            // Rodo progresą
            quiz.showProgress();
            // Užkrauna klausimą ir atsakymus
              populate();
            }, 10);
            // Skaičiuoja teisingus atsakymus
            quiz.check(this);
        });
    });

    if(quiz.questionNumber < 6){
        populate()
    }
}



// Užkrauna klausimą ir atsakymus į svetainę
  function populate(){
   if(quiz.questionNumber < questions.length) {
       question.innerText = quiz.getQuestion().text;
       button.forEach((x, i) => {
       x.innerText = `${quiz.getQuestion().choices[i]}`;
       });
   } else {
      // Užkrauna resultatus
       quiz.showResults();
    }
  }

// Sukuria quiz objektą
var quiz = new Quiz(questions);