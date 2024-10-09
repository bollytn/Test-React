import React, { useState } from 'react'

type Props = {}

export default function Logged({ }: Props) {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>()

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>User is {isLoggedIn ? "logged in" : "logged out"}</h2>
        </div>
    )
}