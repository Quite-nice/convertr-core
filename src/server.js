/**
 * Created by Jeroen on 20/11/2016.
 */


import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import schema from './api/schema'

const PORT = 3000, app = express()

console.log(schema)

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))

app.listen(PORT)