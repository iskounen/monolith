/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type accountsListMutationVariables = {|
  accountID: string
|};
export type accountsListMutationResponse = {|
  +deleteAccount: ?{|
    +account: {|
      +id: string,
      +name: string,
    |}
  |}
|};
export type accountsListMutation = {|
  variables: accountsListMutationVariables,
  response: accountsListMutationResponse,
|};
*/


/*
mutation accountsListMutation(
  $accountID: ID!
) {
  deleteAccount(input: {id: $accountID}) {
    account {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "accountID"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "accountID"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "DeleteAccountPayload",
    "kind": "LinkedField",
    "name": "deleteAccount",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "accountsListMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "accountsListMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "29b8a4cbe53e6d5bbece59e9ab1679cc",
    "id": null,
    "metadata": {},
    "name": "accountsListMutation",
    "operationKind": "mutation",
    "text": "mutation accountsListMutation(\n  $accountID: ID!\n) {\n  deleteAccount(input: {id: $accountID}) {\n    account {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '943a63e71d303ca1aa013a48020e1e33';

module.exports = node;
