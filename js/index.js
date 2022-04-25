setTimeout(() => {
    confirm("Após longo seis meses, você cumpriu sua missão nesse projeto. Agora é a hora de mostrar que atingiu a superioridade na programação.")
    confirm("Escolha um pesrsonagem")
}, 200);
var today = new Date();
var date = today.getFullYear();
document.getElementById("currentDate").innerHTML = date;

const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;
const questions = [
    {
      question: 'Uma forma de declarar variável em JavaScript:',
      peso: 2,
      answers: [
        {
          answer: '$var',
          correct: false,
        },
        {
          answer: 'var',
          correct: true,
        },
        {
          answer: '@var',
          correct: false,
        },
        {
          answer: '#let',
          correct: false,
        },
      ],
    },
    {
      question: 'Qual o seletor de id no CSS?',
      peso: 2,
      answers: [
        {
          answer: '#',
          correct: true,
        },
        {
          answer: '.',
          correct: false,
        },
        {
          answer: '@',
          correct: false,
        },
        {
          answer: '/',
          correct: false,
        },
      ],
    },
  ];


function createQuestion(i) {
    const oldButtons = answerBox.querySelectorAll('button');
    oldButtons.forEach((btn) => {
      btn.remove();
    });
  
    const questionText = question.querySelector('#question-text');
    const questionNumber = question.querySelector('#question-number');
  
    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;
  
    questions[i].answers.forEach((answer, i) => {

      const answerTemplate = document.querySelector('.answer-template').cloneNode(true);
  
      const letterBtn = answerTemplate.querySelector('.btn-letter');
      const answerText = answerTemplate.querySelector('.question-answer');
  
      letterBtn.textContent = letters[i];
      answerText.textContent = answer['answer'];
  
      answerTemplate.setAttribute('correct-answer', answer['correct']);
  

      answerTemplate.classList.remove('hide');
      answerTemplate.classList.remove('answer-template');
  

      answerBox.appendChild(answerTemplate);
  

    
      answerTemplate.addEventListener('click', function () {
        checkAnswer(this);
      });
    });
  
    actualQuestion++;
  }
  
  function checkAnswer(btn) {
    const buttons = answerBox.querySelectorAll('button');
  
    buttons.forEach((button) => {
      if (button.getAttribute('correct-answer') == 'true') {
        button.classList.add('correct-answer');
  

        if (btn === button) {
    
          points++;
        }
      } else {
        button.classList.add('wrong-answer');
      }
    });
  
  }