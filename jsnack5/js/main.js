/* 
sia con for che con while
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

//*****************************************************************************************************************/
//*****************************************************************************************************************/

// creiamo un array vuoto
let dispari = [];

// chiediamo all'utente di inserire 6 numeri utilizzando un ciclo for
/* for (let i = 0; i < 6; i++) {
  let numero = parseInt(prompt("Inserisci un numero:"));

  // definisco se il numero è dispari
  if (numero % 2 !== 0) {
    dispari.push(numero);
  }
}
 */
// chiediamo all'utente di inserire 6 numeri utilizzando un ciclo while
/*
let i = 0;
while (i < 6) {
  let numero = parseInt(prompt("Inserisci un numero:"));

  // definisco se il numero è dispari
  if (numero % 2 !== 0) {
    Dispari.push(numero);
    i++;
  }
}
*/

// stampiamo l'array dei numeri dispari
console.log("I numeri Dispari sono : " + dispari);
