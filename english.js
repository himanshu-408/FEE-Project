// Questions will be asked
const Questions = [{
    id: 0,
    q: "The student, _____________ won the science fair, was awarded a scholarship.",
    a: [{ text: "who", isCorrect: true  },
        { text: "whom", isCorrect: false },
        { text: "whose", isCorrect: false },
        { text: "which", isCorrect: false }
    ]

},
{
    id: 1,
    q: "I am not sure _____________ will be able to attend the meeting.",
    a: [{ text: "if", isCorrect: false, isSelected: false },
        { text: "whether", isCorrect: true },
        { text: "that", isCorrect: false },
        { text: "who", isCorrect: false }
    ]

},
{
    id: 2,
    q: "The children _____________ playing in the park when it started to rain.",
    a: [{ text: "was", isCorrect: false },
        { text: "were", isCorrect: true },
        { text: "is", isCorrect: false },
        { text: "are", isCorrect: false }
    ]

}
,
{
    id: 3,
    q: "Please remind me _____________ the books to the library.",
    a: [{ text: "return", isCorrect: false },
        { text: "returning", isCorrect: false },
        { text: "to return", isCorrect: true },
        { text: "returned", isCorrect: false }
    ]

}
,
{
    id: 4,
    q: "She asked me _____________ I wanted to go with her.",
    a: [{ text: "if", isCorrect: false },
        { text: "that", isCorrect: false },
        { text: "whether", isCorrect: true },
        { text: "which", isCorrect: false }
    ]
}   
,
{
    id: 5,
    q: "The concert was amazing; _____________, the singer had a beautiful voice.",
    a: [{ text: "moreover", isCorrect: true },
        { text: "however", isCorrect: false },
        { text: "therefore", isCorrect: false },
        { text: "nevertheless", isCorrect: false }
    ]
}  
,
{
    id: 6,
    q: "I have lived in this city _____________ I was a child.",
    a: [{ text: "since", isCorrect: true },
        { text: "for", isCorrect: false },
        { text: "during", isCorrect: false },
        { text: "from", isCorrect: false}
    ]
} 
,
{
    id: 7,
    q: "Which of the following words is a synonym for 'happy'?",
    a: [{ text: "joyful", isCorrect: true },
        { text: "tired", isCorrect: false },
        { text: "angry", isCorrect: false },
        { text: "sad", isCorrect: false }
    ]
}  
,
{
    id: 8,
    q: "Choose the correct homophone for the word 'their':",
    a: [{ text: "They're", isCorrect: false },
        { text: "there", isCorrect: false },
        { text: "Their's", isCorrect: true },
        { text: "Thorough", isCorrect: false }
    ]
}  
,
{
    id: 9,
    q: "Identify the correct form of the verb to complete the sentence: She _______ to the store yesterday.",
    a: [{ text: "go", isCorrect: false },
        { text: "goes", isCorrect: false },
        { text: "went", isCorrect: true },
        { text: "going", isCorrect: false }
    ]
}    

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "rgba(74, 79, 234, 0.039)";
    op1.style.color = "white";
    op2.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op2.style.color = "black";
    op3.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op3.style.color = "black";
    op4.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op4.style.color = "black";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op1.style.color = "black";
    op2.style.backgroundColor = "rgba(74, 79, 234, 0.039)";
    op2.style.color = "white";
    op3.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op3.style.color = "black";
    op4.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op4.style.color = "black";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op1.style.color = "black";
    op2.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op2.style.color = "black";
    op3.style.backgroundColor = "rgba(74, 79, 234, 0.039)";
    op3.style.color = "whitesmoke";
    op4.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op4.style.color = "black";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op1.style.color = "black";
    op2.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op2.style.color = "black";
    op3.style.backgroundColor = "rgba(210, 227, 244, 0.732)";
    op3.style.color = "black";
    op4.style.backgroundColor = "rgba(74, 79, 234, 0.039)";
    op4.style.color = "white";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 9) {
    id++;
    iterate(id);
    console.log(id);
}

})