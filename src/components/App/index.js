/* aws-amplify */
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsExports from '../../aws-exports';
/* app */
import App from './App';

Amplify.configure(awsExports);
export default withAuthenticator(App);
