import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './assets/styles/global';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    })
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      console.log(data);
      schema.create("transaction", data);
      return data;
    });
  }
});




ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
