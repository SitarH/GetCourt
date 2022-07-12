import React from 'react'

export default function PlayerContext(props) {

  return (
    <PlayerContext.Provider value={{}}>
             {props.children}
         </PlayerContext.Provider>
  )
}

