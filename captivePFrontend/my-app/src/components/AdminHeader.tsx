import React from "react"
import {useNavigate} from "react-router-dom"
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {AdminState, resetAdminState, selectAdmin} from "../features/admin/adminSlice";
import {adminLogoutAPI} from "../features/admin/adminAPIs";

export default function AdminHeader() {
    const admin = useAppSelector<AdminState>(selectAdmin);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const handleLogout = (e:MouseEvent) => {
        e.preventDefault()
        dispatch(adminLogoutAPI(admin));
        dispatch(resetAdminState());
        navigate("/");
    }

    const handleTestNavigate = (e:MouseEvent) => {
        e.preventDefault()
        navigate("/admin/test");
    }

    const handleAdminPanel = (e:MouseEvent) => {
        e.preventDefault()
        navigate("/admin");
    }

    return (
        <header>
            <div>
                <button type="logout" onClick={(e) => handleLogout(e)}>Logout</button>
                <button type="test" onClick={(e) => handleTestNavigate(e)}>Test</button>
                <button type="adminPanel" onClick={(e) => handleAdminPanel(e)}>Admin Panel</button>
            </div>

        </header>
    )
}
