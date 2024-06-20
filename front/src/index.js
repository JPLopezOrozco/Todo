import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { CsrfProvider } from './context/CsrfContext';
import { TaskProvider } from './context/TaskContext';
import { TaskUpdateProvider } from './context/TaskUpdateContext';
import { TaskDeleteProvider } from './context/TaskDeleteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <CsrfProvider>
        <TaskProvider>
            <TaskUpdateProvider>
                <TaskDeleteProvider>
                    <App />
                </TaskDeleteProvider>
            </TaskUpdateProvider>
        </TaskProvider>
    </CsrfProvider>
    </BrowserRouter>
);

