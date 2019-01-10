import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Contact extends Component {
    constructor(){
        super();
        this.state={
            toggle: false
        };
    }

    onShowClick = () => {
        this.setState({toggle: !this.state.toggle});
    }

    onDeleteClick = () => {
        this.props.deleteClickHandeler();
    }

    render() {

        const { name, email , phone} = this.props;

        return(
            <div className="card card-body mb-3">
                <h4 style={{ color: 'blue' }}>{name} <i onClick={this.onShowClick.bind(this)}
                                                        className="fas fa-sort-down"
                                                        style={{ cursor: 'pointer',

                                                        }}
                                                        />
                                                        <i className="fas fa-times"
                                                            style={{ cursor: 'pointer',
                                                                    float: 'right',
                                                                    color: 'red' }}
                                                            onClick={this.onDeleteClick.bind(this)}/>
                </h4>
                {
                    (this.state.toggle) ? (<ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>) : ''
                }

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
