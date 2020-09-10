import React from 'react';

/* 
Tilsvarer function Title() { ... } 
Lagrer en funksjon som en konstant
=> returnerer alt som står inni klammeparantesene
*/
const Title = () => {
    console.log("Tittel lastet inn");

    return <h1>Infoskjerm</h1>;
}

// Gjør at andre js-filer har tilgang til den her
// Få tilgang til den ved å skrive <Title />
// Må også importe: import Title fra mappa (her: "./Title")
export default Title;