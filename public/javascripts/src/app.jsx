var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
var React = require('react');
var Rentals = require('./Rentals.jsx');

React.render(
    <Rentals />,
    document.getElementById('rentals')
);