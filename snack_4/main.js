// Crea un generatore di funzioni creaTimer

// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(time) {
    return () => {
        setTimeout(() => {
            console.log('Tempo scaduto!')
        }, time);
    };
};

const timerOneSecond = creaTimer(1000);
const timerFiveSeconds = creaTimer(5000);
const timerTenSeconds = creaTimer(10000);

timerOneSecond();
timerFiveSeconds();
timerTenSeconds();