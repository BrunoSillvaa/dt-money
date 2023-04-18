import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          type: 'deposit',
          amount: 600,
          category: 'Dev',
          createdAt: new Date('2023-04-02')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'deposit',
          amount: 1100,
          category: 'Casa',
          createdAt: new Date('2023-05-15')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
