/* react */
import React from 'react';
import {
    Component,
    Fragment
} from 'react';
/* app  */
import Header from '../Header';

class App extends Component {

    render() {

        console.log('Component [App] render');

        return (
            <Fragment>
                <header>
                    <Header />
                </header>
            </Fragment>
        );

    }

}

export default App;
