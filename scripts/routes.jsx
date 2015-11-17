var React =require('react');
var Router = require('react-router');
var Route = Router.Route;

var Homepage = require('./components/AboutPage.jsx');
var ContactPage = require('./components/ContactPage.jsx');
var Header = require('./components/Header.jsx');


module.exports = (
    <Router>
        <Route name='app' path='/' handler={Header}>
            <Route name='#' handler={Homepage} />
            <Route name='contact' path='/contact' handler={ContactPage} />
        </Route>
    </Router>
);