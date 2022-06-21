import React from 'react'

export default function UserContext(props) {

  return (
    <UserContext.Provider value={{}}>
             {props.children}
         </UserContext.Provider>
  )
}

