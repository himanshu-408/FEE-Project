// Questions will be asked
const Questions = [{
    id: 0,
    q: "Which of the following is correct about JavaScript?",
    a: [{ text: "Object-Based language", isCorrect: false  },
        { text: "Assembly-language", isCorrect: false },
        { text: "Object-Oriented language", isCorrect: true },
        { text: "High-level language", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Which of the following is used for comments in C++?",
    a: [{ text: "/* comment */", isCorrect: false, isSelected: false },
        { text: "// comment */", isCorrect: false },
        { text: "// comment", isCorrect: false },
        { text: " both // comment or /* comment */", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Which of the following is the correct syntax of including a user defined header files in C++?",
    a: [{ text: " #include [userdefined]", isCorrect: false },
        { text: "#include “userdefined”", isCorrect: false },
        { text: "#include <userdefined.h>", isCorrect: true },
        { text: "#include <userdefined>", isCorrect: false }
    ]

}
,
{
    id: 3,
    q: "Which of the following user-defined header file extension used in c++?",
    a: [{ text: ".hg", isCorrect: false },
        { text: ".cpp", isCorrect: false },
        { text: ".h", isCorrect: true },
        { text: ".hf", isCorrect: false }
    ]

}
,
{
    id: 4,
    q: "Which of the following type is provided by C++ but not C?",
    a: [{ text: "double", isCorrect: false },
        { text: "float", isCorrect: false },
        { text: "int", isCorrect: false },
        { text: "bool", isCorrect: true }
    ]
}   
,
{
    id: 5,
    q: "Is Python case sensitive when dealing with identifiers?",
    a: [{ text: "no", isCorrect: false },
        { text: "yes", isCorrect: true },
        { text: "machine dependent", isCorrect: false },
        { text: "none of the above", isCorrect: false }
    ]
}  
,
{
    id: 6,
    q: " Which of the following correctly declares an array in C++?",
    a: [{ text: "array{10};", isCorrect: false },
        { text: "array array[10];", isCorrect: false },
        { text: "int array;", isCorrect: false },
        { text: "int array[10];", isCorrect: true}
    ]
} 
,
{
    id: 7,
    q: " Which of the following symbol is used to declare the preprocessor directives in C++?",
    a: [{ text: "$", isCorrect: false },
        { text: "^", isCorrect: false },
        { text: "#", isCorrect: true },
        { text: "&", isCorrect: false }
    ]
}  
,
{
    id: 8,
    q: " Which tag is used to write the javascript code",
    a: [{ text: "<script> ", isCorrect: true },
        { text: "<sp>", isCorrect: false },
        { text: "<javascirpt>", isCorrect: false },
        { text: "<java>", isCorrect: false }
    ]
}  
,
{
    id: 9,
    q: "Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?",
    a: [{ text: "fontsize()", isCorrect: false },
        { text: "fontcolor()", isCorrect: false },
        { text: "fixed()", isCorrect: false },
        { text: "italics()", isCorrect: true }
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
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
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