import '../scss/globals.scss';

import React, {PropTypes} from 'react';
import DevTools from './DevTools';

const App = ({children}) => <div>
    {children}
    {process.env.NODE_ENV !== 'production' ? <DevTools/> : null}
</div>;

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
