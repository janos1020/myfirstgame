'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


let secretNumber = Math.trunc(Math.random()*20+1);
let score =20



document.querySelector('.check').addEventListener('click', function () {
    
   // console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    // when there is no input
    console.log(secretNumber);

    if (!guess) {
        document.querySelector('.message').textContent = 'no number 😢'

    }
//whwn player wins 

    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉Correct Number';
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (document.querySelector('.highscore').textContent <  score) document.querySelector('.highscore').textContent = score ;

    }
    //guess is too high or low
    else if (guess !== secretNumber) {


        if (score > 0) {
            document.querySelector('.message').textContent = (guess > secretNumber) ?'Too high! 😢' : 'Too low! 😢';
            score--
            document.querySelector('.score').textContent = score;
        }
        else {
           document.querySelector('.message').textContent = 'you lost😭😭'; 

        }
        }
        
  
})

document.querySelector('.again').addEventListener('click', function () {

    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('body').style.backgroundColor = '#222';
    console.log(secretNumber);
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('.message').textContent = 'start guessing';



})





