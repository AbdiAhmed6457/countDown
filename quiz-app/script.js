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

// console.log(a_text)

let currentQuiz = 0;


function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // console.log(currentQuiz);

    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
        if (selectedOption) {
            console.log("Selected Answer:", selectedOption.id); // Logs the chosen option (a, b, c, or d)
        } else {
            console.log("No option selected.");
}

}

loadQuiz();

submitbtn.addEventListener ('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {  
        loadQuiz();
        
    } else {
        alert("get yourself a banana since you have already finished all the question")
        console.error("No more questions!"); 

}


})