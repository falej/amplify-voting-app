/* react */
import React from 'react';
/* semantic-ui-react */
import {
    Segment,
    Dimmer,
    Loader,
    Icon,
    Button,
    Message
} from 'semantic-ui-react';

const component = (props) => {

    console.log('Component [Vote] render');

    let content = null;

    if (props.status === 'LOADING_VOTE') {
        content = (
            <Segment basic>
                <Dimmer active inverted>
                    <Loader size='medium' />
                </Dimmer>
            </Segment>
        );
    }

    if (props.status === 'LOADED_VOTE') {
        let vote = props.data.vote;
        if (vote) {
            if (vote.vote === 'Y') {
                content = (
                    <Segment basic>
                        <Button icon color='green' disabled size='large'>
                            <Icon name='thumbs up outline' />
                        </Button>
                    </Segment>
                );
            } else {
                content = (
                    <Segment basic>
                        <Button icon color='red' disabled size='large'>
                            <Icon name='thumbs down outline' />
                        </Button>
                    </Segment>
                );
            }
        } else {
            content = (
                <Segment basic>
                    <Button icon color='green' size='large'>
                        <Icon name='thumbs up outline' />
                    </Button>
                    <Button icon color='red' size='large'>
                        <Icon name='thumbs down outline' />
                    </Button>
                </Segment>
            );
        }
    }

    if (props.status === 'ERROR') {
        content = (
            <Segment basic>
                <Button basic disabled color='red' size='large'>
                    ERROR
                </Button>
            </Segment>
        );
    }

    return content;

};

export default component;
