let submit= document.querySelector ('.submit');
submit.addEventListener("click", calScore);

let reset= document.querySelector ('.reset');
reset.addEventListener("click", resetScore);

let correct = 0;

let p= document.querySelector("#score");

function calScore(event){
    event.preventDefault();
    correct=0;
    for (let i=1; i<=10; i++){
        var radioName= document.getElementsByName('q'+i);
        
        for(let j=0; j < radioName.length; j++){
            let radioValue= radioName[j];
            
            if(radioValue.value =="right" && radioValue.checked){
                correct++;
            }
        }
    }
    
    p.innerText= "Your score is : " + correct;
}



function resetScore(){
    correct=0;
    p.innerText= "You clicked the reset button." ;
}
