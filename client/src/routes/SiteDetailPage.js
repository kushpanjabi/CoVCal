import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { SitesContext } from '../context/SitesContext';
import './SiteDetailPage.css';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import StarRating from '../components/StarRating';


const SiteDetailPage = () => {
    const { id } = useParams();
    const { selectedSite, setSelectedSite } = useContext(SitesContext)

    useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch (`http://localhost:5000/sites/${id}`);
            const resJson = await res.json();
            console.log(resJson.data);
            setSelectedSite(resJson.data);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
    },[]);

    return (
        <div>
            {selectedSite && (
                <>
                <h1 className="centr">{selectedSite.site.name}</h1>
                <div className="centr">
                    <StarRating rating={selectedSite.site.average_rating} />
                </div>
                <div>
                    <Reviews reviews={selectedSite.reviews} />
                </div>
                <AddReview />
                </>
            )}
        </div>
    );
    };

export default SiteDetailPage;
