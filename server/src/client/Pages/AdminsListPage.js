import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchAdmins} from '../actions'

export class AdminsListPage extends Component{
  componentDidMount = () => {
    this.props.fetchAdmins()
  }

renderAdmins = () => {
  const {admins} = this.props
  if (admins) {
    return admins.map( admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }
  return <h4>You must be admin to see this</h4>
}

  render() {
    return(
      <div>
        <h3>Protected list of secret admins!</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    ) 
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins }
}

export default {
  loadData: ({ dispatch }) => dispatch( fetchAdmins() ),
  component: connect(mapStateToProps, { fetchAdmins })(AdminsListPage)
}