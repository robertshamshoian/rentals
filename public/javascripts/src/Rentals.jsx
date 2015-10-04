var React = require('react');
var request = require('request');

var Rental = require('./Rental.jsx');


module.exports = React.createClass({
    //set initial state to a blank array
    getInitialState: function() {
        return {rentals: []}
    },

    componentDidMount: function() {

    //request data from serer and set state with data
        request('https://rob-rentals.herokuapp.com/api/rentals', function(error, response, body) {
            var result = JSON.parse(body);
            if (this.isMounted()) {
                this.setState(result.data);
            }
        }.bind(this));
        
    },

    render: function(){
        //render the state with new data
         return (
            <div className="list-group">
                {this.state.rentals.map(function(rental){
                    return (
                        <Rental
                            key={rental._id}
                            title={rental.title}
                            price={rental.price}
                            region={rental.region}
                            location={rental.location}
                            date={rental.date}
                        />
                    )
                })}
            </div>
        );
    }
});
