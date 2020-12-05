import React from 'react'
import { commitMutation, graphql, QueryRenderer } from 'react-relay'
import { environment } from './relay_environment'

const DeleteButton = (props) => {
  const handleClick = () => {
    if (confirm("Are you sure?")) {
      commitMutation(
        environment,
        {
          mutation: graphql`
            mutation accountListMutation ($accountID: ID!) {
              deleteAccount(input: {id: $accountID}) {
                account {
                  id
                  name
                }
              }
            }
          `,
          variables: {
            accountID: props.accountID
          },
          onCompleted: (response, errors) => {
            if (errors) {
              console.log(errors)
            }
            // TODO: refresh the list component (instead of refreshing the whole page)
            window.location.reload()
          },
          onError: error => {
            console.error(error)
          }
        },
      )
    }
  }

  return (
    <button onClick={handleClick}>
      Delete
    </button>
  )
}

const AccountTable = props => {
  const accountRowMaker = account => {
    return (
      <tr key={account.id}>
        <td>{account.name}</td>
        <td><DeleteButton accountID={account.id} /></td>
      </tr>
    )
  }

  const accountRows = props.accounts.map(accountRowMaker)

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {accountRows}
      </tbody>
      <tfoot>
        <tr>
          <td>Count: {props.accounts.length}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export class AccountList extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query accountListQuery {
            accounts {
              id
              name
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }
          return <AccountTable {...props} />
        }}
      />
    );
  }
}
