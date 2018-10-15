import { USER_REGISTERED, USERS_SORTED, USERS_UNSORTED } from '../constants'

export function userRegistered(user) {
  return {
    type: USER_REGISTERED,
    payload: {
      user
    }
  }
}

export function usersSorted(isAlphabetical) {
  return {
    type: USERS_SORTED,
    payload: {
      isAlphabetical
    }
  }
}

export function usersUnsorted(isAlphabetical) {
  return {
    type: USERS_UNSORTED,
    payload: {
      isAlphabetical
    }
  }
}
