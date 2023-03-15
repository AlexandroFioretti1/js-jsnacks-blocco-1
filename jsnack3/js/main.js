/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

/* strumenti usati 
let
for
parseInt
Prompt
console.log
 */

/* chiediamo per 10 volte all'utente di inserire un numero sommando il risultato totale */
/* let tot = 0;
for (let i = 1; i <= 10; i++) {
  let number = parseInt(prompt(`Inserisci il ${i} numero:`));
  tot += number;
} */
/* mettiamo in console.log il risultato del nostro utente 
console.log(`La somma dei numeri inseriti è: ${tot}`);

/************************************************************************************************/
/************************************************************************************************/

// SNACK 3
/*Rifare con WHILE LOOP:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

// inizializzo la variabile somma
let somma = 0;

// inizializzo la variabile i
let i = 1;

// eseguo il ciclo while per 10 volte
while (i <= 10) {
  // chiedo all'utente di inserire un numero
  let numero = prompt("Inserisci un numero");
  // aggiungo il numero alla somma
  somma += parseInt(numero);
  // incremento la variabile
  i++;
}
// stampo la somma dei numeri inseriti
console.log("La somma dei numeri inseriti è: " + somma);
