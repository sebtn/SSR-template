import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchAdmins} from '../actions'

export class AdminsListPage extends Component{
  componentDidMount = () => {
    this.props.fetchAdmins()
  }

renderAdmins = () => {
  const {admins} = this.props
  return admins.map( admin => {
    return <li key={admin.id}>{admin.name}</li>
  })
}

  render() {
    return(
      <div>
        <h3>Protectde list of secret admins!</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    ) 
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins }
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(AdminsListPage),
  loadData: ({ dispatch }) => dispatch( fetchAdmins() )
}