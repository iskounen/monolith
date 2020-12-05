import React from 'react'
import ReactDOM from 'react-dom'
import { commitMutation, graphql } from 'react-relay'
import { NavigationMenu } from '../src/navigation_menu'
import { environment } from '../src/relay_environment'

class AccountsNew extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      name: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleCreateClick = this.handleCreateClick.bind(this)
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleCreateClick() {
    commitMutation(
      environment,
      {
        mutation: graphql`
          mutation accountsNewMutation ($accountName: String!) {
            createAccount(input: {name: $accountName}) {
              account {
                id
                name
              }
            }
          }
        `,
        variables: {
          accountName: this.state.name
        },
        onCompleted: (_response, errors) => {
          if (errors) {
            console.log(errors)
          }
          window.location.href = "/accounts"
        },
        onError: error => {
          console.error(error)
        }
      },
    )
  }

  render() {
    return (
      <>
        <NavigationMenu />
        <h1>Accounts</h1>
        <h2>New</h2>
        <div>
          <a href="/accounts" data-turbolinks="false">Back</a>
        </div>
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleNameChange} />
          </div>
          <div>
            <button onClick={this.handleCreateClick}>Create</button>
          </div>
        </div>
      </>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AccountsNew />,
    document.body.appendChild(document.createElement('div')),
  )
})
