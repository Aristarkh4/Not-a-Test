import { isNonEmptyString } from 'ramda-adjunct'

import {
  initialState,
  USER_REGISTERED,
  USERS_SORTED,
  USERS_UNSORTED
} from '../constants'

export default function rootReducer(
  state = initialState,
  { type, payload = {} }
) {
  switch (type) {
    case USER_REGISTERED:
      return payload.user && isNonEmptyString(payload.user)
        ? {
            ...state,
            users: [...state.users, payload.user]
          }
        : state
    // When list is being sorted/unsorted the alphabetical flag swithces,
    case USERS_SORTED:
      return {
        ...state,
        isAlphabetical: true
      }
    case USERS_SORTED:
      return {
        ...state,
        isAlphabetical: false
      }
    default:
      return state
  }
  return state
}
