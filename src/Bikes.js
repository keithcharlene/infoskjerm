import React, { useEffect, useState } from 'react';
import createEnturService from '@entur/sdk';

/*
SDK er en måte å hente API på
URL til API-greiene kan bli veldig lang
Søk f.eks. "bedrift sdk"
*/

const service = createEnturService({ 
    clientName: 'esmena-informasjonkurs' 
});

const Bikes = () => {
    const [bikeStations, setBikeStations] = useState([]);

    useEffect(() => {
        service.getBikeRentalStationsByPosition({
            latitude: 63.428311,
            longitude: 10.392514,
        },
        230)
        .then(data => setBikeStations(data));
    }, []);

    return <div className="bikes">
        {bikeStations.map(station => <Station key={station.id} station={station} />)}
    </div>;
};

export default Bikes;

const Station = (props) => {
    // Pakker ut flere variabler fra et objekt
    const {name, bikesAvailable, spacesAvailable} = props.station;
    return <div className="station">
        {name} - {bikesAvailable} : {spacesAvailable}
    </div>;
};