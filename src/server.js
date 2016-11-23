/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'

import schema from './api/schema'
import context from './api/context'

const PORT = 3000, app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({schema, context}))
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))

app.listen(PORT)