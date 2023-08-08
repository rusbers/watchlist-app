import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
import App from './App';
import './index.css';
import { CssBaseline } from '@mui/material';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <App />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  // </React.StrictMode>
);
