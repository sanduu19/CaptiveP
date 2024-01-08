import React from "react"
import {Outlet, redirect} from "react-router-dom"
import MainHeader from "./MainHeader";
import Footer from "./Footer";

export function isLoggedIn() {
    if (localStorage.getItem("IsLoggedIn") === "LoggedIn") {
        throw redirect("/admin")
    }
    console.log(localStorage.getItem("IsLoggedIn"));
    return "Not LoggedIn Previously!"
}

export default function MainLayout() {
    return (
        <div className="site-wrapper">
            <MainHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}