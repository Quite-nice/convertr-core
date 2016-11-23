/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mockUser, mockUserList } from '../mock'

export default class UserConnector {
    get(handler) {
        return mockUser(handler)
    }

    follows(handler) {
        return mockUserList([2, 8])
    }

    followed_by(handler) {
        return mockUserList([2, 8])
    }
}