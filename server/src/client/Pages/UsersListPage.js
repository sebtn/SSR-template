import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {fetchUsers} from '../actions'

export class UsersList extends Component {

  componentDidMount = () => {
    this.props.fetchUsers()
  }

  renderUsers = () => {
    const {users} = this.props
    return (
      users.map( user => <li key={user.id}>{user.name}</li> )
    )
  }

  render() {
    return(
      <div>
        <h1>usersList this is</h1>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

// /connected to the app.use
const loadData = (store) => {
  // console.log('Loading data!')
  return store.dispatch( fetchUsers() )
}

const mapStateToProps = (state) => { 
  return { users: state.users }
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
} 