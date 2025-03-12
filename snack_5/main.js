// Crea una funzione stampaOgniSecondo con setInterval.

// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function sendEverySecond(message) {
    let counter = 0;
    const interval = setInterval(() => {
        console.log(message);
        counter++
        if (counter >= 5) {
            clearInterval(interval);
        }
    }, 1000);

};

sendEverySecond('Hello there!');