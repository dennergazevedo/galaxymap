
import React from 'react';

// ROUTE
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

// COMPONENTES
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import Register from '../views/Register';
import Homepage from '../views/Homepage';
import Embarque from '../views/Embarque';
import Viagem from '../views/Viagem';
import Foguetes from '../views/Foguetes';
import Planetas from '../views/Planetas';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} Login/>
                <Route path="/register" exact component={Register} Login/>
                <Route path="/home" exact component={Homepage} isPrivate/>
                <Route path="/embarque" exact component={Embarque} isPrivate/>
                <Route path="/viagem" exact component={Viagem} isPrivate/>
                <Route path="/foguetes" exact component={Foguetes} isPrivate/>
                <Route path="/planetas" exact component={Planetas} isPrivate/>
                <Route path="/" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}