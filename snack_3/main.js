// Crea una funzione eseguiOperazione

// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const sum = (num1, num2) => num1 + num2;
const difference = (num1, num2) => num1 - num2;
const product = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

function eseguiOperazione(operation, num1, num2) {
    return operation(num1, num2);
}

// const eseguiOperazione = (operation, num1, num2) => operation(num1, num2);

console.log(eseguiOperazione(sum, 10, 2));
console.log(eseguiOperazione(difference, 10, 2));
console.log(eseguiOperazione(product, 10, 2));
console.log(eseguiOperazione(division, 10, 2));
