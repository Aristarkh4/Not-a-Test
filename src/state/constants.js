export const USER_REGISTERED = 'USER_REGISTERED'
// I added 2 actions to identify that sorting or unsorting of the lsit of users
// is requested. I was following the registration workflow for the actions, and their handling.
export const USERS_SORTED = 'USERS_SORTED'
export const USERS_UNSORTED = 'USERS_UNSORTED'

export const initialState = {
  users: [],
  // Whehter the list of users is sorted alphabetically.
  // True initially, to show that sorting is working.
  isAlphabetical: true
}
