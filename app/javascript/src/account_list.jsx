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
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>{ props.accounts.map(account => <div key={account.id}>{account.name}</div>) }</div>
        }}
      />
    );
  }
}
