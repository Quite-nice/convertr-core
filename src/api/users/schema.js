/**
 * Created by Jeroen on 21/11/2016.
 */

export const users = `
    type User {
        name: String
        follows: [User]
        followed_by: [User]
    }
`

export const resolvers = {
    User: {
        follows() {
            return [{name: 'kymer'}, {name: 'damiaan'}]
        },

        followed_by() {
            return [{name: 'Kymer'}, {name: 'Damiaan'}]
        }
    }
}