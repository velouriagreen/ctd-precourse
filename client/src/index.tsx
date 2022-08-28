import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.tsx';
import { BrowserRouter } from "react-router-dom";
import './styles.css';
ReactDOM.render( <BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('root'));

// import React from 'react';
// import App from './components/App.tsx';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container!);

// root.render(<App tab='home' />);