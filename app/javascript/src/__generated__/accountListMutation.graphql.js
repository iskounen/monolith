/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type accountListMutationVariables = {|
  accountID: string
|};
export type accountListMutationResponse = {|
  +deleteAccount: ?{|
    +account: {|
      +id: string,
      +name: string,
    |}
  |}
|};
export type accountListMutation = {|
  variables: accountListMutationVariables,
  response: accountListMutationResponse,
|};
*/


/*
mutation accountListMutation(
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
    "name": "accountListMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "accountListMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7d5dfcbbb33d2eea2718bdd9ad5cc5f8",
    "id": null,
    "metadata": {},
    "name": "accountListMutation",
    "operationKind": "mutation",
    "text": "mutation accountListMutation(\n  $accountID: ID!\n) {\n  deleteAccount(input: {id: $accountID}) {\n    account {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5dc060bc23de66dc71df917de4f38f9c';

module.exports = node;
