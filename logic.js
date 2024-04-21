// When it's each of the last digits translation
const рік = [1]
const роки = [2,3,4]
const років = [0,5,6,7,8,9,11,12,13,14]

function onWindowLoad() {
    const yearPrintDiv = document.getElementById('yearPrint');
    let userInputYear = prompt('Введи свій вік');
    let year = parseInt(userInputYear); // Validation steps
    if (isNaN(year) || year < 0) { // Validation Steps
        yearPrintDiv.textContent = "Працює лише з невід'ємнити числами"; // Validation steps 
    } else {
        let last2Numbers = year % 100;
        let lastNumber = year % 10;
        if(рік.includes(lastNumber) && !років.includes(last2Numbers)){
            yearPrintDiv.textContent = "Рік";
        }
        if(роки.includes(lastNumber) && !років.includes(last2Numbers)){
            yearPrintDiv.textContent = "Роки";
        }
        if(років.includes(last2Numbers) || років.includes(lastNumber)){
            yearPrintDiv.textContent = "Років";
        }
    }

}
window.onload = onWindowLoad;









