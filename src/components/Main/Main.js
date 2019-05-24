/* react */
import React from 'react';
/* semantic-ui-react */
import { Container } from 'semantic-ui-react';
/* app */
import Videos from '../Videos';

const component = (props) => {

    console.log('Component [Main] render');

    return (
        <Container>
            <Videos />
        </Container>
    );

};

export default component;
