console.log('connesso');
/*Bottone GENERA*/

const generatore = document.getElementById('genera');

generatore.addEventListener('click', function () {
    console.log('funzione partita');
    const nome = document.getElementById('nome').value;
    const km = Number(document.getElementById('km').value);
    const ticketprice = (Math.round((km * 0.21) * 100) / 100).toFixed(2);
    const age = document.getElementById('fasce').value;
    const bigliettoCard = document.querySelector('.biglietto');
    const nomePasseggero = document.getElementById('nomePasseggero');
    const offerta = document.getElementById('offerta');
    const carrozza = document.getElementById('carrozza');
    const random10 = Math.floor(Math.random() * 10) + 1;
    const codice = document.getElementById('codice');
    const randomCode = Math.floor(Math.random() * 99999) + 10000;
    const costo = document.getElementById('costo');

    if (nome == '' || isNaN(km)) {

        console.log('errore');

    } else {

        bigliettoCard.classList.remove('d-none');
        nomePasseggero.innerHTML = `${nome}`;
        carrozza.innerHTML = `${random10}`;
        codice.innerHTML = `${randomCode}`;
        console.log('sei sotto al remove');

        if (age == 'Minorenne') {
            const youngprice = (Math.round((ticketprice * 0.8) * 100) / 100).toFixed(2);
            console.log(youngprice);
            offerta.innerHTML = 'Biglietto junior';
            costo.innerHTML = `${youngprice}`;


        } else if (age == 'Maggiorenne') {

            console.log(ticketprice);
            offerta.innerHTML = 'Biglietto standard';
            costo.innerHTML = `${ticketprice}`;


        } else if (age == '65+') {

            const elderprice = (Math.round((ticketprice * 0.6) * 100) / 100).toFixed(2);
            console.log(elderprice);
            offerta.innerHTML = 'Biglietto senior';
            costo.innerHTML = `${elderprice}`;

        } else {

            console.log('Errore di qualche tipo');

        }

    }

    console.log('funzione terminata');
})

/* Bottone CANCELLA*/

const cancellatore = document.getElementById('cancella');

cancellatore.addEventListener('click', function () {
    console.log('hai cancellato');
    const myForm = document.getElementById('myForm');
    myForm.reset();
})