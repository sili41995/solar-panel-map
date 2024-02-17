import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/components/App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* <GlobalStyles /> */}
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
