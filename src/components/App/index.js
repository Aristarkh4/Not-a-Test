import { mapIndexed } from 'ramda-adjunct'
import { sort, /*identity, */ compose } from 'ramda'
import React from 'react'

export default function App({
  handleOnSubmit,
  handleOnSort,
  latestUser,
  users,
  isAlphabetical
}) {
  return (
    <div className="App">
      {/* Give a welcome message to the new user.
        -- 
        At first I thought of adding the message as a browser alert,
        which would pop up during execution of handleOnSubmit. However,
        I strugled with getting latest user name from there, and later noticed
        a field here for that. So I moved it here. 
        
        I am not familiar with how to make objects invisible, so I wrote a ternary
        condition that returns the welcome message for the latest user if latestUser
        is defined, and nothing otherwise. That might potentially cause problems, if the
        list of users will be not locally, as it will display some latest user welcome
        message even if they didn't register on current session.*/
      latestUser === undefined ? '' : 'Welcome, new user, ' + latestUser + '!'}
      <p>Add your name below to register!</p>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user" />
        <input type="submit" value="Register user" />
      </form>
      <p>See the list below for everyone else who has registered.</p>
      {/* Button that requests sorting/unsorting of the users list.*/}
      <form onSubmit={handleOnSort}>
        <input type="submit" value="Sort alphabetically" />
      </form>
      <ul>
        {/* Provide the list of all registered users.
          --
          I tried to figure out quite a bit how to deal with this one.
          I tired first to just print out all the users elements. It didn't work
          with multiline printing. Then, I noticed that this task is labelled with ramda
          and that mapIndexed function is imported. I remembered something about
          mapping elements of array to React components. That is what I did. Every user
          name is being mapped to paragraph with that name.
          I used ramda's sort for sorting the user names in order, and composed it
          with mapping. The united function is then applied to the users array.
          Tried to implement on-button sorting with isAlphabetical being a flag,
          but for some reason it always comes up undefined, even though I define it in the
          initial state. So I commented it out.*/
        compose(
          mapIndexed(user => <p> {user} </p>),
          /*isAlphabetical ? */ sort(
            (str1, str2) => str1 > str2
          ) /* : identity*/
        )(users)}
      </ul>
    </div>
  )
}
