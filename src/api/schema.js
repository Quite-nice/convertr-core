/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { merge } from 'lodash'

import { makeExecutableSchema } from 'graphql-tools';

const rootDefs = `
    type Query {        
        user(handler: String!): User
    }
    
    schema {
        query: Query
    }
`

const rootResolvers = {
    Query: {
        user(_, args, context) {
            return context.User.get(args.handler)
        }
    }
}

import {users, resolvers} from './users/schema'

export default makeExecutableSchema({
    typeDefs: [rootDefs, users],
    resolvers: merge(rootResolvers, resolvers)
})