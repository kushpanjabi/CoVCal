import React, {useEffect, useContext } from 'react';
import './SiteList.css'
import { SitesContext } from '../context/SitesContext';
import { useHistory } from 'react-router-dom';


const SiteList = () => {

    const { sites, setSites } = useContext(SitesContext)

    let history = useHistory();

    async function handleDelete(e, id) {
        e.stopPropagation();
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

    const handleUpdate = (e, id) => {
        e.stopPropagation();
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
                    <tr onClick={() => handleSiteSelect(site.id)} key={site.id}>
                    <td>{site.name}</td>
                    <td>{site.location}</td>
                    <td>{"$".repeat(site.price_range)}</td>
                    <td>Ratings</td>
                    <td onClick={(e) => handleUpdate(e, site.id)}>✍🏼</td>
                    <td onClick={(e) =>handleDelete(e, site.id)}>🗑</td>
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