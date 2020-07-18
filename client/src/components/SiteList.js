import React, {useEffect, useContext } from 'react';
import './SiteList.css'
import { SitesContext } from '../context/SitesContext';
import { useHistory } from 'react-router-dom';


const SiteList = () => {

    const { sites, setSites } = useContext(SitesContext)

    let history = useHistory();

    async function handleDelete(id) {
        try { 
            await fetch(`http://localhost:5000/sites/${id}`, {
                method: "DELETE",
            });
            setSites(sites.filter(site => {
                return site.id !== id
            }));
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (id) => {
        history.push(`/sites/${id}/update`);
    }

    const handleSiteSelect = (id) => {
        history.push(`/sites/${id}`);
    }

    async function getSites() {
        const res = await fetch('http://localhost:5000/sites');
        const sitesArray = await res.json();
        setSites(sitesArray.data.site);
    }

    useEffect(() => {
        getSites();
    },[])

    console.log(sites);

    return (
    <table className="content-table">
        <thead>
            <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Price Range</th>
            <th>Ratings</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {sites && sites.map(site => {
                return (
                    <tr key={site.id}>
                    <td onClick={() => handleSiteSelect(site.id)}>{site.name}</td>
                    <td>{site.location}</td>
                    <td>{"$".repeat(site.price_range)}</td>
                    <td onClick={() => handleSiteSelect(site.id)}>Ratings</td>
                    <td onClick={() => handleUpdate(site.id)}>Edit</td>
                    <td onClick={() =>handleDelete(site.id)}>Delete</td>
                </tr>
                )

            })}
            {/* <tr>
            <td>CVS Drive Through</td>
            <td>Diamond Bar, CA</td>
            <td>$</td>
            <td>4.5</td>
            <td>Edit</td>
            <td>Delete</td>
            </tr>
            <tr className="active-row">
            <td>Rite Aid</td>
            <td>Diamond Bar, CA</td>
            <td>$$</td>
            <td>4.2</td>
            <td>Edit</td>
            <td>Delete</td>
            </tr> */}
        </tbody>
    </table>
    )
}

export default SiteList;