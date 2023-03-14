/* L’utente inserisce due numeri in successione con due prompt.
Il software stampa il maggiore.*/

/* strumenti usati
let
if\else
prompt
 */

// chiediamo all'utente di inserire il primo numero
let num1 = prompt("Inserisci il primo numero:");
console.log(num1);

// chiediamo all'utente di inserire il secondo numero
let num2 = prompt("Inserisci il secondo numero:");
console.log(num2);

// convertiamo i valori inseriti dall'utente in numeri
num1 = Number(num1);
num2 = Number(num2);

// confrontiamo i numeri e stampiamo il risultato maggiore sulla console del desktop
if (num1 > num2) {
  console.log("Il numero maggiore è: " + num1);
} else if (num2 > num1) {
  console.log("Il numero maggiore è: " + num2);
} else {
  console.log("I due numeri sono uguali.");
}
