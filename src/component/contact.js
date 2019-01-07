import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
    render() {

        const { name, Email , Phone} = this.props;

        return(
            <div className="card card-body mb-3">
                <h4 style={{ color: 'blue' }}>{name.toUpperCase()}</h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {Email}</li>
                    <li className="list-group-item">Phone: {Phone}</li>
                </ul>

            </div>
        );


    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Phone: PropTypes.string.isRequired
};

export default Contact;
