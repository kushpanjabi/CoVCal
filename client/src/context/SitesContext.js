import React, { useState, createContext } from 'react';

export const SitesContext = createContext();

export const SitesContextProvider = (props) => {
    const [sites, setSites] = useState([]);
    const [selectedSite, setSelectedSite] = useState(null);

    const addSites = (site) => {
        setSites([...site, site])
    };

    return (
        <SitesContext.Provider value={{ sites, setSites, addSites, selectedSite, setSelectedSite }}>
            {props.children}
        </SitesContext.Provider>
    )
}