import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'income',
          value: 6000,
          category: 'Dev',
          date: '01/01/2020',
       },
        {
          id: 2,
          title: 'Compras de Janeiro',
          type: 'outcome',
          value: 1000,
          category: 'Compras',
          date: '15/02/2020',
      },
        {
          id: 3,
          title: 'Vendas componentes',
          type: 'income',
          value: 2500,
          category: 'Vendas',
          date: '01/01/2020',
      },
    {
        id: 4,
        title: 'Alugel',
        type: 'outcome',
        value: 2500,
        category: 'Casa',
        date: '06/03/2021',
    },
      ]
    })
},

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
     })

     this.post('/transactions', (shcema, request) => {
        const data = JSON.parse(request.requestBody);

        return this.schema.create('transaction', data);
     })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

