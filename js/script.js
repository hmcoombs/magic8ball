
const [form] = document.forms;
const [askquestionvalidationMsg] =document.querySelectorAll('.validationMsg');

function isQuestionValid(question){
    return question.length > 10 && question.length < 100;
}

function getElement(){
    return {
        question(e){
            e.target.classList.toggle('border-danger', !isQuestionValid(e.target.value) );

        }
    }
}

//gave up trying to type this at this point

function handleInput(e){
    const {question} = form; 
    const {name} = e.target;
    SVGLinearGradientElement(name, )
}

document.addEventListener('DOMContentLoaded', () =>{
form.question.addEventListener('input', handleInput)
})








































// Create an input field for users to ask a question// Create a label for your input field telling your user to "Ask me anything!"// Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
// Create a div with an id of "answers" that you will insert the images into using js



// Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div// array list that will contain our answers


// let answerOptions = ["You will not figure out the piece of code today!!!", "Concentrate and ask again","You will cause a stack overflow","why will this not work"];
// let answerOptionsLength = answerOptions.length;

// // create random number generatorlet randomNum

// // is run a for loop through our 
// arrayconst = document.getElementById('button');

// //button = document,getElementById("button");

// button,addEventListener("click", function ask(){


// randomNum = Math.floor(Math.random()*answerOptionsLength);
// //console.log(answerOptions[randomNum]);
// document.getElementById('response').innerHTML=(answerOptions[randomNum])
// });

// //document.getElementById('response').innerHTML=()
// console.log(answerOptions[randomNum]);


// Replace the input field with the user's question when displaying the answer
// Style your page any way you like
// Activate Github Pages for your project






  



// my try
// array list that will contain answer
// let answerOptions = ['you will not figure out the piece of code today. use ing 4 answers, hope to find some, search for them']



// create random number generator
// let randomNum;
// = Math.floor(Math.random()*answerOptionLength);

// console.log(randomNum)


// let answerOptionsLength = answerOptions.length;
// function ask();

// const button = document.getElementById('button');

// button.addEventListener('click', function ask(){
//     randomNum = Math.floor(Math.random()*answerOptionLength);
// })


// use parse to get the random answers or find API 


// Main objectives:
// Create an input field for users to ask a question// Create a label for your input field telling your user to "Ask me anything!"// Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
// Create a div with an id of "answers" that you will insert the images into using js
// Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div// array list that will contain our answers
// let answerOptions = ['You will not figure out the', 'piece of code today!!!', "You will not find the bug today!!","You will cause a stack overflow","unfullfilled promise"];let answerOptionsLength = answerOptions.length;
// // create random number generatorlet randomNum
// // is run a for loop through our arrayconst button = document.getElementById("button");
// button.addEventListener("click", function ask(){
//     randomNum = Math.floor(Math.random()*answerOptionsLength);
// console.log(answerOptions[randomNum]);
// document.getElementById('response').innerHTML=(answerOptions[randomNum])
// })
// Replace the input field with the user's question when displaying the answer
// Style your page any way you like
// Activate Github Pages for your project

// let params = encodeURIComponent("Is today going to be a good day?");
// let url = "https://8ball.delegator.com/magic/JSON/" + params;
// fetch(url)
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
    
//   });
// let params = encodeURIComponent("Is today going to be a good day?");
// let uri = "https://8ball.delegator.com/magic/JSON/" + params;
// fetch(uri)
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//   });