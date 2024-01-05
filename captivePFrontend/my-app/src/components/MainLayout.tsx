import React from "react"
import {Outlet, useNavigate} from "react-router-dom"
import MainHeader from "./MainHeader";
import Footer from "./Footer";

export function isLoggedIn(){
    const navigate = useNavigate();
    if(localStorage.getItem("IsLoggedIn")){
        navigate("/admin");
    }
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