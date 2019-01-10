import React, { Component } from 'react';
import Contacts from './component/contacts';
import Header from "./component/header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "./context";


class App extends Component {
  render() {

    const name = "Debajit";

    return(

         <Provider>
             <div className="App">

                 <div className="container">
                     <h1>React documentation examples</h1>
                     <h3>Hello {name.toUpperCase()}</h3>
                     <Header branding="Contact Manager" />

                     <Contacts />
                 </div>
             </div>

         </Provider>
    );

    /*return React.createElement(
            'div',{ className : 'App'},
            React.createElement(
                'h1' , null ,'the app component')
        );*/



  }
}

export default App;
