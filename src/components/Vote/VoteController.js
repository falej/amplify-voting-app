/* react */
import React from 'react';
import { Component } from 'react';
/* aws amplify */
import Amplify, {
    API, Auth
} from 'aws-amplify';
import awsmobile from '../../aws-exports';
/* app */
import Vote from './Vote';

class VoteController extends Component {

    state = {
        status: 'INIT',
        data: {}
    }

    constructor(props) {
        super(props);
        Amplify.configure(awsmobile);
    }

    onClickVoteHandler = (username,video,vote) => {

        let newState = {
            ...this.state,
            status: 'LOADING_VOTE'
        };
        this.setState(newState);

        let requestParams = {
            body: {
                video: video,
                username: username,
                vote: vote
            }
        };
        API.post('VotingAppAPI','/votes/put',requestParams)
            .then( response => {
                if (response.status === 0) {
                    let newState = {
                        ...this.state,
                        status: 'LOADED_VOTE',
                        data: {
                            ...this.state.data,
                            vote: response.payload.vote
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
            }).catch( error => {
                console.log(error);
                let newState = {
                    ...this.state,
                    status: 'ERROR'
                };
                this.setState(newState);
            });
    }

    render() {

        console.log('Controller [VoteController] render');

        return (
            <Vote
                status={this.state.status}
                data={this.state.data}
                onClickVoteHandler={this.onClickVoteHandler} />
        );

    }

    componentDidMount() {

        let newState = {
            ...this.state,
            status: 'LOADING_VOTE'
        };
        this.setState(newState);

        Auth.currentAuthenticatedUser()
            .then( response => {
                let username = response.username;
                let video = this.props.idVideo;
                let newState = {
                    ...this.state,
                    data: {
                        ...this.state.data,
                        username: username,
                        video: video
                    }
                };
                this.setState(newState);
                let requestParams = {
                    queryStringParameters: {
                        username: username,
                        video: video
                    }
                };
                return API.get('VotingAppAPI','/votes',requestParams);
            }).then( response => {
                if (response.status === 0) {
                    let newState = {
                        ...this.state,
                        status: 'LOADED_VOTE',
                        data: {
                            ...this.state.data,
                            vote: response.payload.vote
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
            }).catch( error => {
                console.log(error);
                let newState = {
                    ...this.state,
                    status: 'ERROR'
                };
                this.setState(newState);
            });

    }

}

export default VoteController;
