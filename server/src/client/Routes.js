import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import UsersListPage, { loadData } from './Pages/UsersListPage'
import App from './App'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users',
      }
    ]
  }
]
