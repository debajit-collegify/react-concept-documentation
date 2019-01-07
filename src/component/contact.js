import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
    render() {

        const { name, Email , Phone} = this.props;

        return(
            <div>
                <h4 style={{ color: 'blue' }}>{name.toUpperCase()}</h4>
                <ul>
                    <li>Email: {Email}</li>
                    <li>Phone: {Phone}</li>
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
