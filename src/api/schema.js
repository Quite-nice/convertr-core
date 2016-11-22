/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { merge } from 'lodash'

import { makeExecutableSchema } from 'graphql-tools';

const rootDefs = `
    type Test {
        testString: String
    }
    
    type Query {
        test: Test
        user: User
    }
    
    schema {
        query: Query
    }
`

const rootResolvers = {
    Query: {
        test() {
            return {testString: 'Hello, World!'}
        },
        user() {
            return {name: 'jeroen'}
        }
    }
}

import {users, resolvers} from './users/schema'

export default makeExecutableSchema({
    typeDefs: [rootDefs, users],
    resolvers: merge(rootResolvers, resolvers)
})