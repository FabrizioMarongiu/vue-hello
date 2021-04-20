// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
    el: '#app',
    
    data: {

        titolo: 'La tua frase motivazionnale preferita',

        immagine: 'https://picsum.photos/200',

        frase: 'Non si è mai troppo vecchi per fissare un nuovo obiettivo o per sognare un nuovo sogno'
        
    }
});