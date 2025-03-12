// Crea un contatore automatico con setInterval

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(ms) {
    let counter = 0;
    let interval = setInterval(() => {
        console.log(counter);
        counter++
        if (counter > 10) {
            clearInterval(interval);
            setTimeout(() => {
                console.log('Interval cleared');
            }, ms)
        }
    }, ms)
};

creaContatoreAutomatico(1000);