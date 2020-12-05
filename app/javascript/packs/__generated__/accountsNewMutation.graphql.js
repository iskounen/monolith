/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type accountsNewMutationVariables = {|
  accountName: string
|};
export type accountsNewMutationResponse = {|
  +createAccount: ?{|
    +account: {|
      +id: string,
      +name: string,
    |}
  |}
|};
export type accountsNewMutation = {|
  variables: accountsNewMutationVariables,
  response: accountsNewMutationResponse,
|};
*/


/*
mutation accountsNewMutation(
  $accountName: String!
) {
  createAccount(input: {name: $accountName}) {
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
    "name": "accountName"
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
            "name": "name",
            "variableName": "accountName"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateAccountPayload",
    "kind": "LinkedField",
    "name": "createAccount",
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
    "name": "accountsNewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "accountsNewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9e2c55714326ad7ead332bd53efd78d0",
    "id": null,
    "metadata": {},
    "name": "accountsNewMutation",
    "operationKind": "mutation",
    "text": "mutation accountsNewMutation(\n  $accountName: String!\n) {\n  createAccount(input: {name: $accountName}) {\n    account {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c0872b3f725eb7e849c22427959ebc9';

module.exports = node;
