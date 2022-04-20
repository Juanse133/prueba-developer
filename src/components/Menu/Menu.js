import React, { useState, Fragment } from 'react';
import Form from '../Form/Form';
import aerolineas from './aerolineas.json'; // JSON del cual se importan los datos
import './Menu.scss';

const Menu = () => {
    const [selectedAirline, setSelectedAirline] = useState("");
    return (
        <Fragment>
            <div className="menu-container">
                <ul className="aerolinea-container">
                    {
                        aerolineas.map(aerolinea => {
                            return (
                                <li className="aerolinea-btn" id={`aerlinea-${aerolinea.id}`} onClick={() => setSelectedAirline(aerolinea.name)}>
                                    {aerolinea.name}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <Form selectedAirline={selectedAirline}/>
        </Fragment>
    )
}

export default Menu