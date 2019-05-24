/* react */
import React from 'react';
import {
    Component
} from 'react';
/* aws amplify */
import Amplify, {
    API
} from 'aws-amplify';
import awsmobile from '../../aws-exports';
/* app */
import Videos from './Videos';

class VideosController extends Component {

    state = {
        status: 'INIT',
        data: null
    }

    constructor(props) {
        super(props);
        Amplify.configure(awsmobile);
    }

    render() {

        console.log('Controller [VideosController] render');

        return (
            <Videos status={this.state.status} data={this.state.data} />
        );

    }

    componentDidMount() {

        let newState = {
            ...this.state,
            status: 'LOADING_VIDEOS'
        };
        this.setState(newState);

        API.get('VotingAppAPI','/videos',{})
            .then( response => {

                if(response.status === 0) {
                    let newState = {
                        ...this.state,
                        status: 'LOADED_VIDEOS',
                        data: {
                            ...this.state.data,
                            videos: response.payload.videos
                        }
                    };
                    this.setState(newState);
                } else {
                    let newState = {
                        ...this.state,
                        status: 'ERROR'
                    };
                    this.setState(newState);
                }

            })
            .catch( error => {
                console.log(error);
                let newState = {
                    ...this.state,
                    status: 'ERROR'
                };
                this.setState(newState);
            });

    }

}

export default VideosController;
