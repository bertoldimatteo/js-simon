// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const container = document.getElementById("container");

const arrayNumber = [];
const userNumber = [];
const checkNumber = [];
let count = 0;
let number;

for ( let i = 0; i < 5; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    const squareNumber = document.createElement("p");
    squareNumber.classList.add("number");
    
    while (arrayNumber.length <= count) {
        number = Math.floor(Math.random() * 100) + 1;
        if (!arrayNumber.includes(number)) {
            arrayNumber.push(number);
        }
    }

    container.append(square);
    square.append(squareNumber)
    squareNumber.append(arrayNumber[count]);

    count++;  
}

function userInput() {
    let userNum;
    while (userNumber.length < 5) {
        userNum = Number(prompt("Digita un numero di quelli appena visualizzati"));
        if ( isNaN(userNum) ) {
            alert("Hai sbagliato inserisci un numero!!!");
        } else {
            userNumber.push(userNum); 
        }        
    }

    for ( let i = 0; i < arrayNumber.length; i++){
/*         for ( let j = 0; j < userNumber.length; j++){
            if ( arrayNumber[i] == userNumber[j] ){
                discoverNumber += 1;
            }
        } */
        if(userNumber.includes(arrayNumber[i])) {
            checkNumber.push(arrayNumber[i]);
        }
    }


alert(`Ti sei ricordato ${checkNumber.length} numeri (${checkNumber})`);

}

setTimeout(function() {
    const number = document.querySelectorAll(".number");
    for ( const numb of number) {
        numb.classList.add("hide");
    }
}, 4000);

setTimeout(userInput, 4500);  










