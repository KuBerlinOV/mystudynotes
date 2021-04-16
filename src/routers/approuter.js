import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App'
import About from '../components/About';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Libraries from '../components/Libraries';
import Notes from '../components/Notes'
import Note from '../components/Note'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={App} exact={true} />
                <Route path='/notes' component={Notes} />
                <Route path='/notes/edit/:id' component={Note} />
                <Route path='/about' component={About} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;