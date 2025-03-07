const quizData = [
    {
        question: "how old is humnan kind",
        a: '1bil',
        b: '2bil',
        c: '3bil',
        d: '1bil',
        correct: 'c'
    }, {
        question: 'what is the most used programming language?',
        a: 'java',
        b: "C",
        c: 'Pyithon',
        d: 'javascript',
        correct: 'a'

    }, {
        question: 'who is the current prime minister of ethiopia?',
        a: 'Donal trump',
        b: 'Abiy Ahmed',
        c: 'Adanech Abebe',
        d: 'meles zenawi',
        correct: 'b'
    }, {
        question : "what does html stand for?",
        a: ' Hyper text markup language',
        b: 'cascading style sheet',
        c: 'json data',
        d: 'no answer',
        correct: 'a'
    }, {
        question: 'why are you tired?',
        a: 'because i am fasting',
        b: 'because i didn it suhur',
        c: 'i am working hard',
        d: 'all are correct answers',
        correct: 'd'

    }
    
]

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit')
const quiz = document.querySelector('.quiz-container');
// console.log(a_text)

let currentQuiz = 0;
let selectedAnswers = {}; 
let score = 0;


function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // console.log(currentQuiz);

    document.querySelectorAll('input[name="answer"]').forEach((input) => input.checked = false);


}

loadQuiz();

submitbtn.addEventListener ('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');


    if (!selectedOption) {
        alert("Please select an answer before proceeding!");
        return; 
    }

    selectedAnswers[currentQuiz] = selectedOption.id;

    if (selectedOption.id === quizData[currentQuiz].correct) {
        score++;
        console.log(score);
        console.log("Correct! ✅ Score:", score);
    } else {
        console.log("Wrong ❌ The correct answer is:", quizData[currentQuiz].correct);
    }


    currentQuiz++;

    if (currentQuiz < quizData.length ) {  
        loadQuiz();    
        
    }else {
       
        
        quiz.innerHTML = `
    <p>You have answered ${score} questions correctly out of ${quizData.length}</p>
    <button onclick="location.reload()">Reload</button>
`;

        quiz.classList.add("theEnd") 
    


}})