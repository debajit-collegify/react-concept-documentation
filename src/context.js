import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts : [
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
        ]
    };

    render() {
        return (

            <Context.Provider  value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;