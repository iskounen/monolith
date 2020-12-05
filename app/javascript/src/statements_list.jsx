import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import { environment } from './relay_environment'

const StatementsTable = props => {
  const rowMaker = statement => {
    return (
      <tr key={statement.id}>
        <td>{statement.id}</td>
      </tr>
    )
  }

  const rows = props.statements.map(rowMaker)

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
      <tfoot>
        <tr>
          <td>Count: {props.statements.length}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export class StatementsList extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query statementsListQuery {
            statements {
              id
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
          return <StatementsTable {...props} />
        }}
      />
    );
  }
}
