// Crea una funzione che ferma un timer dopo un certo tempo

// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(message, every = 0, stopAt = 5000) {
    const timer = setInterval(() => {
        console.log(message);
    }, every);
    setTimeout(() => {
        clearInterval(timer);
        console.log('Message sent!');
    }, stopAt);
}

eseguiEferma('Hi!', 1000, 5000);