import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import variables from './main.scss'
// import { ThemeProvider } from '@mui/material/styles';
// import { createTheme } from '@mui/system';

// const muiTheme = createTheme({
//     overrides: {
//         MuiSlider: {
//             track: {backgroundColor: '#508F00'},
//             thumb: {backgroundColor: '#508F00'}
//         }
//     }
// })

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <BrowserRouter>
                <App />
            {/* <ThemeProvider theme={muiTheme}>
            </ThemeProvider> */}
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
