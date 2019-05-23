/* react */
import React from 'react';
/* semantic-ui-react */
import {
    Segment,
    Grid,
    Dropdown,
    Icon
} from 'semantic-ui-react';

const component = (props) => {

    console.log('Component [Header] render');

    return (
        <Segment basic>
            <Grid columns={2}>
                <Grid.Row className='sui-grid-row' verticalAlign='middle'>
                    <Grid.Column width={13} textAlign='left'>
                        <div className='aws-header'>
                            <img
                                className='aws-logo'
                                src="/images/aws-logo.png"
                                alt="aws"
                            />
                            <span className='aws-title'>
                                Estimation Tool
                            </span>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3} textAlign='right'>
                        <Dropdown
                            className='icon'
                            icon={<Icon name='user circle' size='big' inverted />}
                            direction='left'
                            pointing='top left'
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item key='user' disabled>
                                    <span>Signed in as <strong>{props.username}</strong></span>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={props.onClickSignOutHandler}>
                                    <Icon name='sign-out' />
                                    Sign Out
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );

};

export default component;
