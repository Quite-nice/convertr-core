/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mockIngredient, mockIngredientList } from '../mock'

export default class IngredientConnector {
    get(name) {
        return mockIngredient(name)
    }

    getCreatedBy(handler) {
        return mockIngredientList([2, 10])
    }
}