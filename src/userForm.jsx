import React from 'react'

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedButton: false,
            firstName: '',
            lastName: '',
            newFirst: '',
            newLast: ''
        }

    }
    showEdit = () => {
        this.setState({clickedButton: true})
    }
    submitSave = () => {
        this.setState({
            clickedButton: false,
            firstName: this.state.newFirst,
            lastName: this.state.newLast
        })
    }
    cancel = () => {
        this.setState({
            clickedButton: false,
            //reupdate to first and last name to avoid error when saving after cancelling
            //e.g editing first name, cancelling, then editing and saving last name
            newFirst: this.state.firstName,
            newLast: this.state.lastName
        })
    }
    updateFirst = (event) => {
        this.setState({newFirst: event.target.value})
    }
    updateLast = (event) => {
        this.setState({newLast: event.target.value})
    }
    editForm = () => {
        return (
        <div id = 'editing'>
            <input type = 'text' onChange = {this.updateFirst} placeholder = {this.state.firstName} ></input>
            <input type = 'text' onChange = {this.updateLast} placeholder = {this.state.lastName} ></input>
            <button onClick = {this.submitSave}>Save</button>
            <button onClick = {this.cancel}>cancel</button>
        </div>)
    }
    display = () => {
        return (
        <div id = 'finalDisplay'>
            <div id = 'fn'>First Name: {this.state.firstName}</div>
            <div id = 'ln'>Last Name: {this.state.lastName}</div>
            <button onClick = {this.showEdit}>Edit</button>
        </div>)
    }

    render() {
        return <div>
            {this.state.clickedButton? this.editForm() : this.display()}
        </div>
    }
}

export default UserForm