/*
Descrizione dell'esercizio To Do List:
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const {createApp} = Vue;
createApp({
    data() {
        return {
            equipmentList: [
                {
                    name: 'Abbigliamento da trekking itinerante a strati comodo'
                },
                {
                    name: 'Scarpe da trekking con suola scolpita antiscivolo'
                },
                {
                    name: 'Giacca antivento/impermeabile'
                },
                {
                    name: 'Cappello e guanti'
                },
                {
                    name: 'Zaino adatto a camminare'
                },
                {
                    name: 'Torcia frontale'
                },
                {
                    name: 'Borracce'
                },
                {
                    name: 'Integratori alimentari'
                },
                {
                    name: 'Sacchetto rifiuti'
                },
                {
                    name: 'Bastoncini telescopici'
                }
            ],
            text: ''
        }
    },
    methods: {
        addItem() {
            this.equipmentList.push(this.text)
        },
        deleteItem(index) {
            this.equipmentList.splice(index, 1),
            this.text = ''
        }
    }
}).mount('#app');