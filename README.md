Vue TODOlist
===

## Consegna:

Rifare l’esercizio della to do list fatto in classe.

Questa volta però ogni TODO sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo

- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

**MILESTONE 1**
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

**MILESTONE 2**
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

**MILESTONE 3**
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

**Bonus:**

1. se il todo ha meno di 5 caratteri esporre un messaggio di errore

1. cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

1. eliminare il todo solo se è stato svolto, altrimenti esporre un messaggio di errore
Buon lavoro e buon weekend!

****************

## Procedimento:

1. Inizializzare un array di oggetti, ognuno con un text e un flag isDone 

1. Stampare con un v-for gli `<li></li>` con all'interno il text dell'item, passare anche l'indice che al click del  bottone elimina toglierà l'item dalla lista se già fatto

1. eseguire i contolli sull'input e sul isDone