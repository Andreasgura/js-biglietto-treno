
/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

let kmTravelled = prompt("Quanti kilometri vuoi percorrere?");
let passengerAge = prompt("Inserisci l'età del passeggero");
let ticketPrice = kmTravelled*0.21;

console.log("prezzo da arrotondare" + ticketPrice);

let priceRounded = ticketPrice.toFixed(2)

console.log("prezzo con due decimali" + priceRounded)

if(isNaN(kmTravelled) || isNaN(passengerAge)) {
    document.getElementById("myticket").innerHTML = ("inserire solo valori numerici")
} else if (passengerAge < 18) {
    (ticketPrice = (ticketPrice*(1-0.2)));
    let priceRounded = ticketPrice.toFixed(2)
    document.getElementById("myticket").innerHTML = ("il prezzo per i    minorenni è " + priceRounded + "€");
} else if (passengerAge > 65) {
    (ticketPrice = (ticketPrice*(1-0.4)));
    console.log("il prezzo per gli over 65 è " + ticketPrice + "€");
    let priceRounded = ticketPrice.toFixed(2)
    document.getElementById("myticket").innerHTML = ("il prezzo per gli over 65 è " + priceRounded + "€");
 }
 else {
    let priceRounded = ticketPrice.toFixed(2)
    document.getElementById("myticket").innerHTML = ("il prezzo del biglietto è " + priceRounded + "€");
}
