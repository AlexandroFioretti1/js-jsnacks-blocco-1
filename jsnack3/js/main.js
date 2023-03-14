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
let somma = 0;
for (let i = 1; i <= 10; i++) {
  let number = parseInt(prompt(`Inserisci il ${i} numero:`));
  somma += number;
}
/* mettiamo in console.log il risultato del nostro utente */
console.log(`La somma dei numeri inseriti è: ${sum}`);
