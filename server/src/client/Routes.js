import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import NotFoundPage from './Pages/NotFoundPage'
import UsersListPage, { loadData } from './Pages/UsersListPage'
import AdminsListPage from './Pages/AdminsListPage'
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
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
