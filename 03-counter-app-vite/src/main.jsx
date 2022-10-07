import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client'; 
import { FirstApp } from './FirstApp';
import App from './HelloWorldApp'   
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            {/* App component  */}
            <App/>
            <FirstApp title='Hello, Im Goku!' subtitle={123}/>
        </React.StrictMode>
)

// rafce 