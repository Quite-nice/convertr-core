/**
 * Created by Jeroen on 20/11/2016.
 */

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