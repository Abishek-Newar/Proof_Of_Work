"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Appbar = () => {
    const session = useSession()
  return (
    <>
    <button onClick={()=>{
        signIn();
    }
    }>Signin</button>
    <button onClick={()=>{
        signOut();
    }}>Signout</button>
    <p>{JSON.stringify(session)}</p>
    </>
  )
}

export default Appbar