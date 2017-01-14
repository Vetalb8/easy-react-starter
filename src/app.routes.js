import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { LoginRoute, LogoutRoute, AuthenticatedRoute } from './components/auth';

import App from './components/App';
import HomePage from './pages/HomePage';

export default (
    <AuthenticatedRoute path='/' component={App}>
        <LoginRoute path='/login'/>
        <LogoutRoute path='/logout'/>
        <IndexRoute component={HomePage}/>
        <AuthenticatedRoute role='user'>
            <Route path='/p' component={HomePage}/>
        </AuthenticatedRoute>
    </AuthenticatedRoute>
);
