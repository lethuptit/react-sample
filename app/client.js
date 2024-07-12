import ReactDOM from 'react-dom';
import React from 'react'; // necessary to import for compilation
import App from './components/App';

require('./globals.scss');

// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
