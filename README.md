*** Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

*   Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, 
    dovrà comparire l’ultima immagine dell’array e viceversa.

*   Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature 
    avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre 
    al cambio di immagine attiva, gestire il cambio di miniatura attiva.

// Creo un vettore che contenga le immagini da iniettare in html
// Creo una variabile "vuota" che, successivamente, andrà ad iniettare il tag in html
// Creo una variabile che vada a selezionarmi l'elemento in cui iniettare gli elementi
// Creo un ciclo che legga gli elementi nel vettore e li inserisca in html
// Creo 2 variabili differenti per le frecce che fungeranno da bottoni per scorrere le immagini
// Creo una variabile e le assegno il primo valore del vettore
// nel ciclo stabilisco:
// SE siamo alla prima posizione del vettore
 // ALLORA lo incremento rimuovendo la classe dalla posizione precedente fin quando non arriverò all'ultima posizione.
// Mentre per il ciclo inverso stabilisco che:
//SE siamo all'ultima posizione del vettore
 // ALLORA decremento rimuovendo la classe dalla posizione precedente fin quando non arriverò all'ultima posizione.
