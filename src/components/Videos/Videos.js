/* react */
import React from 'react';
import { Fragment } from 'react';
/* semantic-ui-react */
import {
    Segment,
    Header,
    Card,
    Message,
    Icon,
    Embed
} from 'semantic-ui-react';
/* app */
import Vote from '../Vote';

const component = (props) => {

    console.log('Component [Videos] render');

    let header = (
        <Segment basic>
            <center>
                <Header as='h1'>
                    Videos
                    <Header.Subheader>
                        Please vote for the video(s) you like the most
                    </Header.Subheader>
                </Header>
            </center>
        </Segment>
    );

    let content = null;

    if (props.status === 'LOADING_VIDEOS') {
        content = (
            <Segment basic>
                <Message icon color='orange'>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                        <Message.Header>Loading videos ...</Message.Header>
                    </Message.Content>
                </Message>
            </Segment>
        );
    }

    if (props.status === 'LOADED_VIDEOS') {
        content = (
            <Segment basic>
                <Card.Group stackable itemsPerRow={4}>
                    {
                        Object.values(props.data.videos).map((video) => {
                            return (
                                <Card key={video.id}>
                                    <Embed id={video.id} placeholder={video.urlThumbnail} source='youtube' />
                                    <Card.Content>
                                        <Card.Header>{video.title}</Card.Header>
                                        <Card.Description>{video.description}</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra textAlign='center'>
                                        <Vote idVideo={video.id} />
                                    </Card.Content>
                                </Card>
                            );
                        })
                    }
                </Card.Group>
            </Segment>
        );
    }

    if (props.status === 'ERROR') {
        content = (
            <Segment basic>
                <Message
                    error
                    icon='frown'
                    header='Ups, something went wrong!'
                    content='Please try again later.'
                />     
            </Segment>
        );
    }

    return (
        <Fragment>
            {header}
            {content}
        </Fragment>
    );

};

export default component;
