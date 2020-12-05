/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type statementsListQueryVariables = {||};
export type statementsListQueryResponse = {|
  +statements: $ReadOnlyArray<{|
    +id: string
  |}>
|};
export type statementsListQuery = {|
  variables: statementsListQueryVariables,
  response: statementsListQueryResponse,
|};
*/


/*
query statementsListQuery {
  statements {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Statement",
    "kind": "LinkedField",
    "name": "statements",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "statementsListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "statementsListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "fa3d63224f2c79abff63879af60b6b32",
    "id": null,
    "metadata": {},
    "name": "statementsListQuery",
    "operationKind": "query",
    "text": "query statementsListQuery {\n  statements {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8725c343756eb53b606259f0d06b19d0';

module.exports = node;
