import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<List />, document.getElementById('root'));
registerServiceWorker();
