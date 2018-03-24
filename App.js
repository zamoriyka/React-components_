import React, { Component } from 'react';
import './App.css';
import {AppButtons} from './components/button'
import {AppList} from './components/list'
import {ElementsList} from './components/elements-list'
//import {AppForm} from './components/form'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/FlatButton'



const styles = {
    addButton: {
        verticalAlign: 'middle',
        marginRight: 450,
    },
};

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
            elementsList: [],
            //value: 'Twin'
        }

        this.handleChange = this.handleChange.bind(this)
    }

   //handleChange = (e) => this.setState({value});
    handleChange(e) {
        var change = {}
        change[e.target.itemsList] = e.target.name
        this.setState({change})
        console.log('hi');
    };


    render() {
        const actions = [
            <FlatButton
                label="Create"
                primary={true}
                style={styles.addButton}
                onClick={() => this.setState({isModalOpen: false})}
            />,
            <RaisedButton
                label="Save"
                primary={false}
                onClick={() => this.setState({isModalOpen: false})}
            />,
            <RaisedButton
                label="Cancel"
                primary={false}
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
                handleChange={this.handleChange}
                value={this.state.itemsList}
                onChange={this.handleChange}
            />
            <ElementsList
            itemList = {this.state.elementsList}
            />

        </Dialog>
      </div>
    );
  }
}







