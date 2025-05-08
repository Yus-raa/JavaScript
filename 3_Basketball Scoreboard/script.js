// Team A
let aScore = document.getElementById('a-score')
let a1Score = document.getElementById('a-score-btn-1');
let a2Score = document.getElementById('a-score-btn-2');
let a3Score = document.getElementById('a-score-btn-3');
let aReset = document.getElementById('reset-team-a-score');

// Team B
let bScore = document.getElementById('b-score');
let b1Score = document.getElementById('b-score-btn-1');
let b2Score = document.getElementById('b-score-btn-2');
let b3Score = document.getElementById('b-score-btn-3');
let bReset = document.getElementById('reset-team-b-score');

let scoreA = 0;
let scoreB = 0;

// Function Team A
function aScore1(){
    scoreA += 1;
    displayScoreA()
}
function aScore2(){
    scoreA += 2;
    displayScoreA()
}
function aScore3(){
    scoreA += 3;
    displayScoreA()
}
function displayScoreA(){
    aScore.textContent = scoreA;
}
function resetA(){
    scoreA = 0;
    displayScoreA()
}

// Function Team B
function bScore1(){
    scoreB += 1;
    displayScoreB()
}
function bScore2(){
    scoreB += 2;
    displayScoreB()
}
function bScore3(){
    scoreB += 3;
    displayScoreB()
}
function displayScoreB(){
    bScore.textContent = scoreB;
}
function resetB(){
    scoreB = 0;
    displayScoreB()
}