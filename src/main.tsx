import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserHistory } from 'history';
import './index.css'
import { AppHeader } from "./components/AppHeader/AppHeader";

const history = createBrowserHistory();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppHeader />
  </React.StrictMode>
)
