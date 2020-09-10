import React, { useEffect, useState } from 'react';

/* 
Siste parameteren er dependencies slik at useEffect kjøres når de oppdateres, her er den tom
Fint å ha for å unngå infinite loop
*/
const DadJoke = () => {
    // useState gir state som overlever life cycle, kan bare oppdateres ved å bruke setJoke. Det som er inni klammeparentesen er default
    const[joke, setJoke] = useState({});

    useEffect(() => {
        // Nettverkskall til oppgitt URL, får et svar fra nettverk
        fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1")
        // .then sier at når promise har fått dataen den venter på, så gjøres det som er skrevet i parantesen
        .then(response => response.json())
        .then(json => setJoke(json.data.children[0].data));
    }, []);
    
    return (
        // Klammeparanteser inni HTML indikerer bruk av js
    <div className="DadJoke">
        <p>{joke.title}</p>
        <p>{joke.selftext}</p>
    </div>
    );
}

export default DadJoke;