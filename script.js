const fs = require('fs');  //richiedo il modulo file system

function readCSV() {
    try {
        const data = fs.readFileSync('./libri.csv', 'utf8');
        console.log(data);
    } catch (err) {
        throw err;
    }
}

try {
    readCSV()
} catch (error) {
    console.log(error.message)
}

let pippo = {
    name: 'pippo',
    dob: 2021
}
console.log(pippo.name)
console.log(pippo['name'])
pippo['cognome'] = 'de pippis'
console.log(pippo.cognome)

//step 1) creare un array di linee
//  let lines = [[title,author,price,copies],[iliade,omero,10,15],[odissea,omero,15,20],[Dome,S. King,20,5]]
//step 2) creo una variabile chiamata properties che conterrà un array con le parole di cui è composta la prima linea
//  const properties = ['title', 'author', 'price', 'copies']
//  lines = [[iliade,omero,10,15],[odissea,omero,15,20],[Dome,S. King,20,5]]
//step 3) creo un array vuoto per gli oggetti
//step 4) ciclo su tutte le linee dentro lines  
//-creo un nuovo oggetto vuoto
//-trasformo l'array in un array di parole ['Iliade', 'omero', '10', '15']
//-faccio un ciclo interno per ogni parola dentro properties
//-aggiungo al nuovo oggetto una proprietà con il nome della proprietà e associo il valore corrispondente nella linea
//-infilo l'oggetto nell'array vuoto
//step 5) faccio console.log(arrayOggetti)