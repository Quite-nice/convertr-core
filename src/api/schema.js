/**
 * Created by Jeroen on 20/11/2016.
 */

import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Test {
        testString: String
    }
    
    type Query {
        test: Test
    }
    
    schema {
        query: Query
    }
`

const resolvers = {
    Query: {
        test() {
            return {testString: 'Hello, World!'}
        }
    }
}

export default makeExecutableSchema({
    typeDefs,
    resolvers
})