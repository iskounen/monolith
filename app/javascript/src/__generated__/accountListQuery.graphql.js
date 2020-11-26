/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type accountListQueryVariables = {||};
export type accountListQueryResponse = {|
  +accounts: $ReadOnlyArray<{|
    +id: string,
    +name: string,
  |}>
|};
export type accountListQuery = {|
  variables: accountListQueryVariables,
  response: accountListQueryResponse,
|};
*/


/*
query accountListQuery {
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
    "name": "accountListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "accountListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ccd799a7bd2c2bdaeb36b8a3e85ba538",
    "id": null,
    "metadata": {},
    "name": "accountListQuery",
    "operationKind": "query",
    "text": "query accountListQuery {\n  accounts {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3f323d472b7bc4d0618a9ed710a76d97';

module.exports = node;
