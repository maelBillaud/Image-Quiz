document.addEventListener('DOMContentLoaded', function() {
    
  });

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
    let pointValue = document.getElementById("pointValue");
    pointValue.textContent = "0";
}