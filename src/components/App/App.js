/* react */
import React from 'react';
import {
    Component,
    Fragment
} from 'react';
/* app  */
import Header from '../Header';
import Main from '../Main';

class App extends Component {

    render() {

        console.log('Component [App] render');

        return (
            <Fragment>
                <header>
                    <Header />
                </header>
                <main style={{padding: '15px 0px'}}>
                    <Main />
                </main>
            </Fragment>
        );

    }

}

export default App;
