import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";

export default function AdminLayout() {
    return (
        <div className="site-wrapper">
            <AdminHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}