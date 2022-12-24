import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataContext } from './Context/Context';
import App from './App';
import './style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataContext>
        <App />
    </DataContext>
);
