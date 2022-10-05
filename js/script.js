/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

//dati
const constantNumber = "21"
console.log(constantNumber);

//input
const userName = prompt("Inserisci il tuo nome")
console.log(userName);

const userSurname = prompt("Inserisci il tuo cognome")
console.log(userSurname);

const favouriteColor = prompt("Inserisci il tuo colore preferito")
console.log(favouriteColor)

//elaborazione
const password = userName + userSurname + favouriteColor + constantNumber
console.log(password);