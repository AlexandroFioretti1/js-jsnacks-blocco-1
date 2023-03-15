/* sia con for che con while:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

// creiamo una Array
var invitati = ["Alexandro", "Luca", "Mattia", "Paolo"];

// chiediamo all'utente il suo nome
var nomeUtente = prompt("Inserisci il tuo Nome");

// inizializziamo una variabile booleana che indica se l'utente è stato invitato
var invitato = false;

// scorriamo l'array degli invitati con un ciclo for
/* for (var i = 0; i < invitati.length; i++) {
  if (invitati[i] === nomeUtente) {
    invitato = true;
    break;
  }
}
 */

//  scorriamo l'array degli invitati con un ciclo while
/* var i = 0;
while (i < invitati.length && !invitato) {
  if (invitati[i] === nomeUtente) {
    invitato = true;
  }
  i++;
}
*/

// Risposta per verificare se il nome è valido
if (invitato) {
  alert("Benvenuto alla festa di Gatsby, " + nomeUtente + "!");
} else {
  alert(
    "Siamo spiacenti, " +
      nomeUtente +
      ", ma non sei stato invitato alla festa di Gatsby."
  );
}
