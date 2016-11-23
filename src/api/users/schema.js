/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const users = `
    type User {
        name: String
        handler: String
        follows: [User]
        followed_by: [User]
    }
`

export const resolvers = {
    User: {
        follows(user, _, context) {
            return context.User.follows(user.handler)
        },

        followed_by(user, _, context) {
            return context.User.followed_by(user.handler)
        }
    }
}