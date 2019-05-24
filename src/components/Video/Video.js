/* react */
import React from 'react';
/* semantic-ui-react */
import {
    Card,
    Embed,
    Button
} from 'semantic-ui-react';

const component = (props) => {

    console.log('Component [Video] render');

    return (
        <Card key={props.key}>
            <Embed id='1vHTdz04OBo' placeholder='https://img.youtube.com/vi/1vHTdz04OBo/0.jpg' source='youtube' />
            <Card.Content textAlign='left'>
                <Card.Header>Real Madrid 1 - 4 Ajax</Card.Header>
                <Card.Description>Champions League</Card.Description>
            </Card.Content>
            <Card.Content extra textAlign='center'>
                <Button color='green'>
                    Yes
                </Button>
                <Button color='red'>
                    No
                </Button>
            </Card.Content>
        </Card>
    );

};

export default component;
