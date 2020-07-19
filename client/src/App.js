import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Landing from './routes/Landing';
import UpdatePage from './routes/UpdatePage';
import SiteDetailPage from './routes/SiteDetailPage';
import { SitesContextProvider } from './context/SitesContext';

const App = () => {
    return (
        <SitesContextProvider>
        <div>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path ='/' component={Landing}/>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path ='/sites/:id/update' component={UpdatePage}/>
                        <Route exact path ='/sites/:id' component={SiteDetailPage}/>
                    </Switch>
                </Router>
            </div>
        </div>
        </SitesContextProvider>

    )
}

export default App;