import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './assets/styles/global';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Frella",
          type: "deposit",
          amount: 2000.00,
          category: "Trabalho",
          createdAt: new Date("2022-05-23 20:00:00"),
        },
        {
          id: 2,
          title: "Conta de energia",
          type: "withdraw",
          amount: 900.00,
          category: "Contas",
          createdAt: new Date("2022-05-24 10:00:00"),
        }
      ]
    })
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
