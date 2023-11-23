
const generatore = document.getElementById('genera');

generatore.addEventListener('click', function() {

    const nome = document.getElementById('nome').value;
    const km = Number(document.getElementById('km').value);
    const ticketprice = (Math.round((km * 0.21)*100)/100).toFixed(2);
    const age = document.getElementById('fasce').value;


    if (nome == '' || isNaN(km)){

        console.log('errore');

    } else if (age == 'Minorenne') {

        const youngprice = (Math.round((ticketprice * 0.8)*100)/100).toFixed(2);
        console.log(youngprice);

    } else if (age == 'Maggiorenne') {

        
        console.log(ticketprice);
    } else if (age == '65+') {

        const elderprice = (Math.round((ticketprice * 0.6)*100)/100).toFixed(2);
        console.log(elderprice);

    } else {
        console.log('erroreCompilazione');
    }

}
)

const cancellatore = document.getElementById('cancella');

cancellatore.addEventListener('click', function(){
    const myForm = document.getElementById('myForm');
    myForm.reset();
})