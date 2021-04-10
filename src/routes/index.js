
import React from 'react';

// ROUTE
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// COMPONENTES
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import Register from '../views/Register';
import Homepage from '../views/Homepage';
import Embarque from '../views/Embarque';
import Viagem from '../views/Viagem';
import Foguetes from '../views/Foguetes';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/home" exact component={Homepage} />
                <Route path="/embarque" exact component={Embarque} />
                <Route path="/viagem" exact component={Viagem} />
                <Route path="/foguetes" exact component={Foguetes} />
                <Route path="/" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}