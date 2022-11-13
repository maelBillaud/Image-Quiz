const mainElement = document.getElementById("main");
const scoreElement = document.getElementById("score-value");
var currentScore = window.localStorage.getItem("points");

function setPoints(score) {
    window.localStorage.setItem("points", score);
    scoreElement.innerText = score;
}

function createPage(question) {
    const img = document.createElement("img");
    img.setAttribute("src", question.img);
    img.setAttribute("alt", "image");

    const quest = document.createElement("h2");
    quest.innerText = question.question;

    const questions = document.createElement("div");
    questions.setAttribute("class", "questions");
    var radio;
    var label;
    for (let i = 0; i < 4; i++) {
        const questionElement = document.createElement("div");
        questionElement.setAttribute("class", "question");
        radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "radio");
        radio.setAttribute("value", `radio-${i}`);
        label = document.createElement("label");
        label.setAttribute("for", `radio-${i}`);
        label.innerText = question.answers[i];
        questionElement.appendChild(radio);
        questionElement.appendChild(label);
        questions.appendChild(questionElement);
    }
    
    const btnValider = document.createElement("button");
    btnValider.setAttribute("id", "btn-validate");
    btnValider.innerText = "Valider";
    
    mainElement.appendChild(img);
    mainElement.appendChild(quest);
    mainElement.appendChild(questions);
    mainElement.appendChild(btnValider);

}

function checkAnswer(question) {
    
}

async function main () {
    let res = await fetch("../data/niveau3.json");
    let questions = await res.json();
    const question1 = questions[0];
    const question2 = questions[1];

    createPage(question1);
    
    var valid = document.getElementById("btn-validate");
    valid.addEventListener("click", function () {
        var answerIndex = -1;
        answers = document.getElementsByTagName("input");
        let i = 0;
        while(answerIndex === -1 && i < answers.length) {
            if(answers[i].checked === true) {
                answerIndex = i;
            } else {
                i++;
            }
        }
        if(answerIndex === question1.answerIndex) {
            correct = document.getElementsByClassName("question")
            correct[answerIndex].style.backgroundColor = "green";
            currentScore ++;
            setPoints(currentScore);
        } else {
            wrong = document.getElementsByClassName("question")
            wrong[answerIndex].style.backgroundColor = "red";
            wrong[question1.answerIndex].style.backgroundColor = "green";
        }

        valid.parentNode.removeChild(valid);

        const btnNext = document.createElement("button");
        btnNext.setAttribute("id", "btn-next");
        btnNext.innerText = "Suivant";

        const mainElement = document.getElementById("main");
        mainElement.appendChild(btnNext);

        btnNext.addEventListener("click", function() {
            mainElement.innerHTML = "";

                    /** QUESTION 2 **/

            createPage(question2);
            valid = document.getElementById("btn-validate");
            valid.addEventListener("click", function () {
                var answerIndex = -1;
                answers = document.getElementsByTagName("input");
                let i = 0;
                while(answerIndex === -1 && i < answers.length) {
                    if(answers[i].checked === true) {
                        answerIndex = i;
                    } else {
                        i++;
                    }
                }
                if(answerIndex === question2.answerIndex) {
                    correct = document.getElementsByClassName("question")
                    correct[answerIndex].style.backgroundColor = "green";
                    currentScore ++;
                    setPoints(currentScore);
                } else {
                    wrong = document.getElementsByClassName("question")
                    wrong[answerIndex].style.backgroundColor = "red";
                    wrong[question2.answerIndex].style.backgroundColor = "green";
                }
        
                valid.parentNode.removeChild(valid);
        
                const btnFin = document.createElement("button");
                btnFin.setAttribute("id", "btn-fin");
                btnFin.setAttribute("onclick", "window.location='niveaux.html'");
                btnFin.innerText = "Terminer ce quiz";
        
                const mainElement = document.getElementById("main");
                mainElement.appendChild(btnFin);
            });
        })
    });

    

    
}

setPoints(currentScore);
main();