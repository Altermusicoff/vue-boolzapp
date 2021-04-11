function initVue() {
    new Vue({
        el: '#app',
        data: {
            name: '', //Nome contatto
            avatar: '', //immagine avatar
            sent: '', // chat verde
            active: '',// contatto attivo
            search: '',
            newMsg: { text: '', status: 'sent', date: '' },
            myText: '',
            newAnswer: { text: 'ok', status: 'received' },
            contacts: [
                {
                    name: 'Michele', 
                    avatar: 'img/circus.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                        
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/cake.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/cabin.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/game.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
                
            
        },
        methods: {


            clickContact: function (contact) {
                this.active=contact;
            },

            filterContact: function () {
                const filter = this.contacts.filter((element,index) => this.contacts[index].name.toLowerCase().includes(this.search))
                return filter;
            },

            

            // clickDeleteContact: function (index) {
            //     this.contacts.splice(index, 1);

            // },

            createNewMsg: function () {
                this.newMsg['text']=this.myText;
                this.active.messages.push({...this.newMsg});
                this.myText='';
                setTimeout(this.answerMsg, 1000);
                
            },

            answerMsg: function () {
                this.active.messages.push({ ...this.newAnswer })


            },
            
            clickDeleteMsg: function (index) {
                this.active.messages.splice(index, 1);

            },
        }
    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);


