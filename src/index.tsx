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
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createAt: new Date()
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
