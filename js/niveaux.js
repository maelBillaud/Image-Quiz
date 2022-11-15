var temp = window.localStorage.getItem("points");
var points;

const pointValue = document.getElementById("pointValue");

function setLockLevel() {
    let lock2 = document.getElementById("lock2");
    let lock3 = document.getElementById("lock3");
    let level2 = document.getElementById("level2");
    let level3 = document.getElementById("level3");
    if(points < 2) {
        lock2.setAttribute("class", "fa-solid fa-lock");
        level2.setAttribute("onclick", "");
        level2.setAttribute("class", "lock");

        lock3.setAttribute("class", "fa-solid fa-lock");
        level3.setAttribute("onclick", "");
        level3.setAttribute("class", "lock");
    } else {
        if(points < 4) {
            lock2.setAttribute("class", "");
            level2.setAttribute("onclick", "window.location='niveau2.html'");
            level2.setAttribute("class", "");

            lock3.setAttribute("class", "fa-solid fa-lock");
            level3.setAttribute("onclick", "");
            level3.setAttribute("class", "lock");
        } else {
            lock2.setAttribute("class", "");
            level2.setAttribute("onclick", "window.location='niveau2.html'");
            level2.setAttribute("class", "");

            lock3.setAttribute("class", "");
            level3.setAttribute("onclick", "window.location='niveau3.html'");
            level3.setAttribute("class", "");
        }
    }
    
}

function resetPoint() {
    pointValue.innerText = "0";
    window.localStorage.setItem("points", "0");
    points = 0;
    setLockLevel();
}

//On va stocker les points dans le local storage
if(temp === null) {
    window.localStorage.setItem("points", "0");
    points = 0;
} else {
    points = parseInt(temp);
}

pointValue.innerText = points;

setLockLevel();
