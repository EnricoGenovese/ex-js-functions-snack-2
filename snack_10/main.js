// Creare un throttler per limitare l’esecuzione di una funzione

// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

function creaThrottler(funzione, tempoLimite) {
    let lastExecution = 0; // -> Punto di partenza per il calcolo del tempo trascorso dall'ultima esecuzione

    return function () {
        const now = Date.now()
        if (now - lastExecution >= tempoLimite) { // -> Calcolo del tempo passato dall'ultima esecuzione del codice
            lastExecution = now; // -> Nuovo valore del punto di partenza per il calcolo
            funzione()
        } else {
            console.log("Non posso ancora eseguire")
        }
    };
};

const throttledLog = creaThrottler(() => console.log("Eseguito"), 2000);

throttledLog(); // -> lastExecution è minore del limite, quindi si esegue
throttledLog(); // -> Non parte perché non è ancora trascorso il tempo limite
setTimeout(throttledLog, 2500); // --> Viene eseguito perché è passato abbastanza tempo 2.5s vs. 2s