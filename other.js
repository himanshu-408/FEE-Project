// Questions will be asked
const Questions = [{
    id: 0,
    q: "Oil, natural gas and coal are examples of …",
    a: [{ text: "Fossil Fuel", isCorrect: true  },
        { text: "Geothermal Resources", isCorrect: false },
        { text: "Renewable Resources", isCorrect: false },
        { text: "Bio-Fuels", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Which of the following is a renewable source of energy?",
    a: [{ text: "Coal", isCorrect: false, isSelected: false },
        { text: "Natural Gas", isCorrect: false },
        { text: "Solar Power", isCorrect: true },
        { text: "Nuclear Power", isCorrect: false }
    ]

},
{
    id: 2,
    q: "What is the process by which plants release water vapor through their leaves?",
    a: [{ text: "Photosynthesis", isCorrect: false },
        { text: "Respiration", isCorrect: false },
        { text: "Transpiration", isCorrect: true },
        { text: "Evaporation", isCorrect: false }
    ]

}
,
{
    id: 3,
    q: "Which of the following is not a phase of matter?",
    a: [{ text: "Solid", isCorrect: false },
        { text: "Liquid", isCorrect: false },
        { text: "Gas", isCorrect: false },
        { text: "Energy", isCorrect: true }
    ]

}
,
{
    id: 4,
    q: "Which scientist is known for developing the theory of relativity?",
    a: [{ text: "Isaac Newton", isCorrect: false },
        { text: "Albert Einstein", isCorrect: true },
        { text: "Galileo Galilei", isCorrect: false },
        { text: "Nikola Tesla", isCorrect: false }
    ]
}   
,
{
    id: 5,
    q: "What is the primary function of red blood cells in the human body?",
    a: [{ text: "Carrying oxygen", isCorrect: true },
        { text: "Fighting infection", isCorrect: false },
        { text: "Regulating body temperature", isCorrect: false },
        { text: "Transmitting nerve signals", isCorrect: false }
    ]
}  
,
{
    id: 6,
    q: "Which of the following is an example of a chemical change?",
    a: [{ text: "Melting ice", isCorrect: false },
        { text: "Dissolving salt in water", isCorrect: false },
        { text: "Burning wood", isCorrect: true },
        { text: "Cutting paper", isCorrect: false}
    ]
} 
,
{
    id: 7,
    q: "What is the largest organ in the human body?",
    a: [{ text: "Liver", isCorrect: false },
        { text: "Brain", isCorrect: false },
        { text: "Skin", isCorrect: true },
        { text: "Heart", isCorrect: false }
    ]
}  
,
{
    id: 8,
    q: "What is the smallest unit of matter?",
    a: [{ text: "Atom", isCorrect: true },
        { text: "Cell", isCorrect: false },
        { text: "Nucleus", isCorrect: false },
        { text: "Molecule", isCorrect: false }
    ]
}  
,
{
    id: 9,
    q: "Which of the following is responsible for carrying genetic information in cells?",
    a: [{ text: "Ribosomes", isCorrect: false },
        { text: "Mitochondria", isCorrect: false },
        { text: "Chromosomes", isCorrect: true },
        { text: "Vacuoles", isCorrect: false }
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