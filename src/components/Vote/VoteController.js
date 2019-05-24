/* react */
import React from 'react';
import { Component } from 'react';
/* app */
import Vote from './Vote';

class VoteController extends Component {

    render() {

        console.log('Controller [VoteController] render');

        return (
            <Vote />
        );

    }

}

export default VoteController;
