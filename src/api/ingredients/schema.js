/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const ingredientSchema = `
    type Ingredient {
        ratio: Float
        name: String
        createdBy: User
    }    
`

export const ingredientResolvers = {
    Ingredient: {
        createdBy(ingredient, _, context) {
            return context.User.getCreator(ingredient)
        }
    }
}

