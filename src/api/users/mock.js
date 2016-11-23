/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import casual from 'casual'

casual.define('userlist', (range) => {
    let out = []
    for (let i = Math.floor(Math.random() * range[1]) + 1; i > 0; i--) {
        const name = casual.first_name
        out.push({handler: `@${name}`, name})
    }
    return out
})

export const mockUser = (handler) => {
    return {handler, name: handler.substr(1)}
}

export const mockUserList = (range) => casual.userlist(range)