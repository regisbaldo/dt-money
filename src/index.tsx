import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './assets/styles/global';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    })
  }
});




ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
