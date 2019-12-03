import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"
import Loader from "../components/loader"
import "../styles/styles.css"
import Layout from "../components/layout"

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
    if (!isAuthenticated()) {
        login()
        // return <p>Redirecting to login...</p>
        return <Loader />
    }

    const user = getProfile()

    return (
        <Layout>
        <nav>
            <Link className="text-blue-600" to="/account/">Home</Link>{" "}
            <Link to="/account/settings/">Settings</Link>{" "}
            <Link to="/account/billing/">Billing?</Link>{" "}
            <a
                href="#logout"
                onClick={e => {
                    logout()
                    e.preventDefault()
                }}
            >
                Log Out
            </a>
        </nav>
        <Router>
            <Home path="/account/" user={user} />
            <Settings path="/account/settings" />
            <Billing path="/account/billing" />
        </Router>
        </Layout>
    )
}

export default Account