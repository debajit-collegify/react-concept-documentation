import React, {Component} from 'react';
import Contact from './contact';

import { Consumer } from "../context";

class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            /*contacts : [
                {
                    id: 1,
                    name: 'Debajit Basu',
                    email: 'debajit@collegify.com',
                    phone: '222-5555-77'
                },
                {
                    id: 2,
                    name: 'Saptarshi Biswas',
                    email: 'saptarshi@sasainfo.com',
                    phone: '322-7895-88'
                },
                {
                    id: 3,
                    name: 'amit mandal',
                    email: 'amit@swigy.com',
                    phone: '256-5775-37'
                }
            ]*/
        };
    }
    deleteInfo =(id) => {
        //console.log(id);
        const { contacts } = this.state;

        const newContacts = contacts.filter( contact =>
        contact.id!== id);

        this.setState({contacts: newContacts});

    };
    render() {

        return(
            <Consumer>
                {value => {

                    const { contacts } =value;
                    return (
                        <React.Fragment>
                            {
                                contacts.map( (contact) =>

                                    <Contact deleteClickHandeler={this.deleteInfo.bind(this ,contact.id)}
                                             key={contact.id}
                                             name={contact.name}
                                             email={contact.email}
                                             phone={contact.email}/>
                                )
                            }
                        </React.Fragment>
                    )
                } }
            </Consumer>

        );

        /*const { contacts } = this.state;
        return (
            <div>
                {
                    contacts.map( (contact) =>

                        <Contact deleteClickHandeler={this.deleteInfo.bind(this ,contact.id)}
                                key={contact.id}
                                 name={contact.name}
                                 email={contact.email}
                                 phone={contact.email}/>
                    )
                }
            </div>
        );*/
    }
}

export default Contacts;