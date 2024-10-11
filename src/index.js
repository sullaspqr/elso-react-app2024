import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
// ha csak import App from './App'; -ként van behúzva, akkor az App.jsx-ben:
// export default App;-ként alul exportálunk,
// vagy export default function App() -ként
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
