/* react */
import React from 'react';
import { Component } from 'react';
/* aws-amplify */
import { Auth } from 'aws-amplify';
/* app */
import Header from './Header';

class HeaderController extends Component {

    state = {
        username: null
    }

    render() {

        console.log('Controller [HeaderController] render');

        return (
            <Header username={this.state.username} onClickSignOutHandler={this.onClickSignOutHandler} />
        );

    }

    onClickSignOutHandler = () => {
        Auth.signOut();
    }

    componentDidMount() {

        Auth.currentAuthenticatedUser()
            .then( data => {
                let newState = {
                    ...this.state,
                    username: data.username
                };
                this.setState(newState);
            })
            .catch( error => {
                alert(error);
            });

    }

}

export default HeaderController;
