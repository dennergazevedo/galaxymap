import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


export default function RouteWrapper({
    component: Component,
    isPrivate,
    Login,
    ...rest
}) {

    const user = window.localStorage.getItem('@galaxymap:user');

    if(!user && isPrivate){
        return <Redirect to="/"/>
    }

    if(!!user && Login){
        return <Redirect to="/home"/>
    }

    return <Route {...rest} component={Component}/>
}

RouteWrapper.propTypes={
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};