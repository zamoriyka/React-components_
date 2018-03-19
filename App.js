import React, { Component } from 'react';
import './App.css';
import {AppButtons} from './components/button'
import {AppList} from './components/list'
import {AppForm} from './components/form'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'



export default class App extends Component {
    constructor (props) {
        super (props)
        this.state = {
            isModalOpen: false,
            itemsList: [
                {name: 'Twin'},
                {name: 'Tripple'},
                {name: 'Quadro'}
            ],

        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event, index, value) => this.setState({value: event.target.value});

    render() {
        const actions = [
            <FlatButton
                label="Save"
                primary={true}
                onClick={() => this.setState({isModalOpen: false})}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => this.setState({isModalOpen: false})}
            />,
        ];
    return (
      <div className="container">
        <AppButtons
            openModal = {() => this.setState ({isModalOpen: true})}
        />
        <Dialog
            title="Numbers structure"
            actions={actions}
            open={this.state.isModalOpen}
            onRequestClose={() => this.setState({isModalOpen: true})}
        >
            <AppList
            items = {this.state.itemsList}
            />
            <AppForm />
        </Dialog>

      </div>
    );
  }
}




