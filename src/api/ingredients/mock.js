/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import casual from 'casual'

casual.define('ingredient', (name) => {
    if (!name) {
        const ing = ['flour', 'syrup', 'pecan nuts', 'walnuts', 'parmesan cheese', 'ricotta', 'eggs', 'water', 'basil', 'garlic', 'cream', 'vanilla']
        return {name: ing[Math.floor(Math.random() * ing.length)], ratio: Math.random()}
    }
    return {name: name, ratio: Math.random()}
})

casual.define('ingredientList', (range) => {
    let out = []
    for (let i = Math.floor(Math.random() * range[1] + 1); i > 0; i--) {
        out.push(casual.ingredient())
    }
    return out
})

export const mockIngredient = casual.ingredient
export const mockIngredientList = casual.ingredientList