/*  L’utente inserisce due parole in successione con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

/* 
STRUMENTI USATI
let
prompt
if\else
console.log
 */
/* chiedo di inserire la prima parola */
let primaParola = prompt("Inserisci la prima parola");

/* chiedo di inserire la seconda parola */
let secondaParola = prompt("Inserisci la tua seconda parola");

/* definisco quale parola far stampare per prima dal console.log */
if (primaParola.length < secondaParola.length) {
  console.log(primaParola);
  console.log(secondaParola);
} else {
  console.log(secondaParola);
  console.log(primaParola);
}
