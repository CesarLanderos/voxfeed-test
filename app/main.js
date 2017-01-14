import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Messages from './components/Messages';
import MessageMetrics from './components/MessageMetrics';
import NoMessageSelected from './components/NoMessageSelected';

import '../sass/app.scss';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRedirect to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/messages" component={Messages} >
                <IndexRoute component={NoMessageSelected} />
                <Route path=":messageId" component={MessageMetrics} />
            </Route>
        </Route>
    </Router>
    ), document.getElementById('app-container')
);
