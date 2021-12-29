import React, { createContext, useState } from 'react'

export const FirebaseContext = createContext(null)

function Context({children}) {
    const [user,setUser] = useState(null)
    return (
        <FirebaseContext.Provider value={{user,setUser}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default Context
