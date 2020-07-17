import React from 'react';
import Header from '../components/Header';
import AddSite from '../components/AddSite';
import SiteList from '../components/SiteList';


const Home = () => {
    return (
        <div>
           <Header />
           <AddSite />
           <SiteList />
        </div>
    )
}

export default Home;
