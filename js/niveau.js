if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
        .register("sw.js")
        .then(res => console.log("Enregistrement du service worker réussi"))
        .catch(err => console.log("Échec de l'enregistrement du service worker", err))
    })
}

const newGame = {
    points: 0
};

const pathPoint = "../data/points.json";

// import { writeFile } from "fs";

// const saveData = (file, data) => {
//     const finished = (error) => {
//         if(error) {
//             console.error(error);
//             return;
//         }
//     }
//     //param null et 2 pour l'enregistrer dans un format lisible
//     const jsonData = JSON.stringify(data, null, 2);
//     writeFile(file, jsonData, finished);
// }

function resetPoint() {
    // saveData(pathPoint, newGame);
    document.getElementById("pointValue").textContent("0");
}