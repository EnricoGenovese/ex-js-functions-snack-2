// Crea una funzione che somma due numeri.

// 1. Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma(num1, num2) {
    return num1 + num2;
};
console.log(somma(3, 4))

// 2. Definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const somma = (num1, num2) => {
    return num1 + num2;
};

console.log(somma(5, 6));

// 3. Riscrivi la funzione somma con la sintassi delle arrow functions.

const somma = ((num1, num2) => num1 + num2);

console.log(somma(7, 8));