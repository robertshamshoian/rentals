var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <a className="list-group-item">
                <h4 className="list-group-item-heading listing">
                    <span className="listing-title">{ this.props.title }</span>
                    <small className="listing-region">{ this.props.region }</small>
                    <small className="listing-location">{ this.props.location }</small>
                </h4>
                <p className="list-group-item-text">
                    <span className="listing-price">Price: { this.props.price }</span>
                </p>
                <p className="list-group-item-text">
                    <span className="listing-posted">Posted: { this.props.date }</span>
                </p>
            </a>
        );
    }
});
