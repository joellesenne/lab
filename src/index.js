import React from 'react';
import ReactDOM from 'react-dom/client';

import {DevSupport} from "@react-buddy/ide-toolbox";
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import {ComponentPreviews, useInitial} from "./dev/index.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
