class Quiz {
  constructor(questions){
    this.questions = questions;
    this.questionNumber = 0;
    this.resultNumber = 0;
  }

  getQuestion(){
    return this.questions[this.questionNumber];
  }

  // Rodo progresą
  showProgress(){
    this.questionNumber++;
    progress.innerText = this.questionNumber + 1;
  }

    // Skaičiuoja teisingus atsakymus
  check(guess) {
   if(guess.innerText === this.getQuestion().answer) {
     return this.resultNumber++;
    }
    return this.resultNumber;
  }

  // Result page
  showResults(){
    var quiz = document.getElementById("quiz");
    quiz.innerHTML = 
    `
    <h1>Results: ${this.resultNumber} </h1>
    <button id="restart" onClick="start()">Restart</button>
    `;
    console.log("results");
  }
}
