// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
    el: '#app',
    
    data: {

        titolo: 'La tua frase motivazionale',

        immagine: [
            'https://picsum.photos/id/237/300/200',
            'https://picsum.photos/300/200',
            'https://picsum.photos/seed/picsum/300/200',
            'https://picsum.photos/id/29/300/200',
            'https://picsum.photos/id/1005/300/200',
            'https://picsum.photos/id/1011/300/200',
            'https://picsum.photos/id/112/300/200',
        ],
        
        frasi: [
            'Non si è mai troppo vecchi per fissare un nuovo obiettivo o per sognare un nuovo sogno',
            'Non rinunciare a provare a fare ciò che vuoi veramente fare. Dove c’è amore e ispirazione, non credo che si possa sbagliare',
            'Il futuro appartiene a coloro che credono nella bellezza dei propri sogni',
            'Non importa quanto vai piano, l’importante è non fermarsi',
            'Se non posso fare grandi cose, posso fare piccole cose in un modo fantastico',
            'Nel momento in cui dubiti di poter volare, perdi per sempre la facoltà di farlo',
            'Cadi sette volte, rialzati otto'
        ],

        index: 0


        
        },

        methods:{
            
            cambia: function(){
                // PROVA OPERATORE TERNARIO NON RIUSCITA
                // this.index = (this.index === (this.frasi.length - 1))? 0 : +1;

                 if(this.index === (this.frasi.length - 1)){
                     this.index = 0;
                 }else{
                     this.index ++;
                 }

                
                console.log(this.index);

                if(this.index === (this.frasi.length - 1)){
                    this.index = 0;
                }else{
                    this.index ++;
                }

               
               console.log(this.index);
                
                
            }
        }
});