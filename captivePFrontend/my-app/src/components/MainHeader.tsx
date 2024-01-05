import React from "react"
import { NavLink } from "react-router-dom"

export default function MainHeader() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <nav>
                <NavLink
                    to="/"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Captive Portal
                </NavLink>
                <NavLink
                    to="/login"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Admin Login
                </NavLink>
                <NavLink
                    to="/register"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Admin Registration
                </NavLink>
            </nav>
        </header>
    )
}
