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


const questions = [{
        question: 'Uma forma de declarar variável em JavaScript:',
        peso: 2,
        answers: [{
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
        answers: [{
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
    {
        question: 'Na linguagem JavaScript, ao invocar o método getElementsByClassName, do objeto document, será retornado:',
        peso: 2,
        answers: [{
                answer: 'Um objeto.',
                correct: false,
            },
            {
                answer: 'Uma função.',
                correct: false,
            },
            {
                answer: 'Um valor numérico.',
                correct: false,
            },
            {
                answer: 'Um array.',
                correct: true,
            },
        ],
    },
    {
        question: 'Em JavaScript, o operador new cria e inicializa um novo objeto.Qual operador NÃO representa a criação de um objeto de tipo nativo JavaScript?',
        peso: 2,
        answers: [{
                answer: 'var o = new Object(); ',
                correct: false,
            },
            {
                answer: 'var l = new ArrayList();',
                correct: true,
            },
            {
                answer: 'var a = new Array();',
                correct: false,
            },
            {
                answer: 'var d = new Date();',
                correct: false,
            },
        ],
    },
    {
        question: 'Ao presenciar uma cena de bulling qual a melhor forma de agir?',
        peso: 2,
        answers: [{
                answer: 'Bater nos dois',
                correct: false,
            },
            {
                answer: 'Fingir de cego e mudo',
                correct: false,
            },
            {
                answer: 'Socar o agressor',
                correct: false,
            },
            {
                answer: 'Conversar com o agressor sobre empatia',
                correct: true,
            },
        ],
    },
    {
        question: 'Thom está explicando algum conteudo importante, o que fazer nesse momento?',
        peso: 2,
        answers: [{
                answer: 'Desmutar o mic e começar a cantar',
                correct: false,
            },
            {
                answer: 'Fazer performace frente camera',
                correct: false,
            },
            {
                answer: 'Prestar atenção e possivel fazer anotações',
                correct: true,
            },
            {
                answer: 'Sai da chamada',
                correct: false,
            },
        ],
    },
    {
        question: 'Baby Inara está com duvidas sobre Closures, o que fazer? ',
        peso: 2,
        answers: [{
                answer: 'Explicar passo a passo com paciencia ',
                correct: true,
            },
            {
                answer: 'Ignorar sua duvida',
                correct: false,
            },
            {
                answer: 'Mandar baby Inara brincar la fora e sair da frente do pc',
                correct: false,
            },
            {
                answer: 'Fingir ser surdo',
                correct: false,
            },
        ],
    },
    {
        question: 'Em javascript, o que faz a função Math.round()?',
        peso: 2,
        answers: [{
                answer: 'Retorna o valor decimal, mais próximo.  ',
                correct: false,
            },
            {
                answer: 'Retorna o valor de um número arredondado para o inteiro, mais próximo.',
                correct: true,
            },
            {
                answer: 'Retorna o valor de um número arredondado para o inteiro, logo abaixo.',
                correct: false,
            },
            {
                answer: 'Retorna o valor de um número arredondado para o inteiro, mais próximo.',
                correct: false,
            },
        ],
    },
    {
        question: 'Considere as expressões em javascript a seguir:var a1=true && true; var a2=true && false; var a3=false && true; var o1=true||true; var o2=false||true; var n2 = !false; var n3 = !"Gato"; os valores retornados serão:',
        peso: 2,
        answers: [{
                answer: 'true, false, false, true, true, true, false.',
                correct: true,
            },
            {
                answer: 'false, false, true, true, false, true, false.',
                correct: false,
            },
            {
                answer: 'true, true, true, true, false, false, true',
                correct: false,
            },
            {
                answer: 'false, false, true, true, true, false, false.',
                correct: false,
            },
        ],
    },
    {
        question: 'Considere a função xpto em código JavaScript.  function xpto (s) {      let text = ""      for (const x of s) {          text = x + text;      }      return text;  } A expressão                                 xpto("banana" + "laranja") retorna:',
        peso: 2,
        answers: [{
                answer: 'lbaarnaannjaa ',
                correct: false,
            },
            {
                answer: 'banalaranja ',
                correct: false,
            },
            {
                answer: 'ajnaralananab',
                correct: true,
            },
            {
                answer: 'ajnaralananab',
                correct: false,
            },
        ],
    },
];

function init() {

    createQuestion(0);
}

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
            btn === button ? points++ : ""
        } else
            button.classList.add('wrong-answer');

    });
    nextQuestion();
}

function nextQuestion() {
    setTimeout(function () {

        if (actualQuestion >= questions.length) {
            showSuccessMessage();
            return;
        }
        createQuestion(actualQuestion);
    }, 1200);
}


function showSuccessMessage() {
    hideOrShowQuizz();

    const score = ((points / questions.length) * 100).toFixed(2);
    const displayScore = document.querySelector('#display-score span');
    displayScore.textContent = score.toString();

    const correctAnswers = document.querySelector('#correct-answers');
    correctAnswers.textContent = points;

    const totalQuestions = document.querySelector('#questions-qty');
    totalQuestions.textContent = questions.length;

    setTimeout(() => {
        score >= 70 ? alert("Mantenha Assim") : alert("Você Precisa Estudar Mais")
        score >= 70 ? window.location.assign("win.html") : window.location.assign("over.html")
    }, 1600);

}


function hideOrShowQuizz() {
    quizzContainer.classList.toggle('hide');
    scoreContainer.classList.toggle('hide');
}

init();