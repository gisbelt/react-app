import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client'; 
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';   
import App from './HelloWorldApp';   
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Components  */}
        <App/>
        <FirstApp title='Hello, Im Goku!' subtitle={ 123 }/>
        <CounterApp value={ 10 } />
    </React.StrictMode>
)

// rafce 