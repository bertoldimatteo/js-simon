// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const container = document.getElementById("container");

const number = [];

for ( let i = 0; i < 5; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
    // let randomNumber = Math.floor(Math.random() * 100) +1;
    // while (!number.includes(randomNumber)){
    //     number.push(randomNumber);
}