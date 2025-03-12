// Creare una funzione che esegue una sequenza di operazioni con ritardi

// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

function sequenzaOperazioni(arr, interval) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            arr[i]();
        }, interval * i);
    }
}

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 2000);