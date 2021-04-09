
import React from 'react';

// ROUTE
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// COMPONENTES
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import Register from '../views/Register';
import Homepage from '../views/Homepage';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/home" exact component={Homepage} />
                <Route path="/" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}