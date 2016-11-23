/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import ConnectedClass from '../../ConnectedClass'

export default class User extends ConnectedClass {
    constructor({connector}) {
        super(connector)
    }
    
    get(handler) {
        return this.connector.get(handler)
    }

    follows(handler) {
        return this.connector.follows(handler)
    }

    followed_by(handler) {
        return this.connector.followed_by(handler)
    }

    getCreator(ingredient) {
        return this.connector.getCreator(ingredient)
    }
}