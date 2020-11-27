import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import { environment } from './relay_environment'

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
          return (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {props.accounts.map(account => <tr key={account.id}><td>{account.name}</td></tr>)}
              </tbody>
              <tfoot>
                <tr>
                  <td>Count: {props.accounts.length}</td>
                </tr>
              </tfoot>
            </table>
          )
        }}
      />
    );
  }
}
