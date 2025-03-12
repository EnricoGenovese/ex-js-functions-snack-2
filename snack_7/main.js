// Crea una funzione che ferma un timer dopo un certo tempo

// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(message, start = 0, stop = 5000) {
    setTimeout(() => {
        let elapsedTime = 0;
        const timer = setInterval(() => {
            console.log(message);
            elapsedTime += 1000;

            if (elapsedTime >= stop) {
                clearInterval(timer);
                setTimeout(() => {
                    console.log('Message sent!');
                }, 1000);
            }
        }, 1000);
    }, start);
}

eseguiEferma('Hi!', 2000, 5000);