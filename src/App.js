import React, { Component } from 'react';
import Contact from './component/contact';
import Header from "./component/header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {

    const name = "Debajit";

    return(
         <div className="App">

            <div className="container">
                <h1>React documentation examples</h1>
                <h3>Hello {name.toUpperCase()}</h3>
                <Header branding="Contact Manager" />
                <Contact name="Debajit Basu" Email="Debajit@collegify.com" Phone="8888-2222-55" />
                <Contact name="Pratik" Email="Pratick@collegify.com" Phone="7777-555-99" />
            </div>
         </div>
    );

    /*return React.createElement(
            'div',{ className : 'App'},
            React.createElement(
                'h1' , null ,'the app component')
        );*/



  }
}

export default App;
