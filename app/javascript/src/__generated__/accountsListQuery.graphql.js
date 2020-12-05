/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type accountsListQueryVariables = {||};
export type accountsListQueryResponse = {|
  +accounts: $ReadOnlyArray<{|
    +id: string,
    +name: string,
  |}>
|};
export type accountsListQuery = {|
  variables: accountsListQueryVariables,
  response: accountsListQueryResponse,
|};
*/


/*
query accountsListQuery {
  accounts {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Account",
    "kind": "LinkedField",
    "name": "accounts",
    "plural": true,
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "accountsListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "accountsListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ea23d280a4995ff4b85d043f60970c28",
    "id": null,
    "metadata": {},
    "name": "accountsListQuery",
    "operationKind": "query",
    "text": "query accountsListQuery {\n  accounts {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e813df8c028362ec72fe9aa9a6b670e4';

module.exports = node;
