import React, { useState, createContext } from 'react';

export const SitesContext = createContext();

export const SitesContextProvider = (props) => {
    const [sites, setSites] = useState([]);

    const addSites = (site) => {
        setSites([...site, site])
    };

    return (
        <SitesContext.Provider value={{ sites, setSites, addSites }}>
            {props.children}
        </SitesContext.Provider>
    )
}