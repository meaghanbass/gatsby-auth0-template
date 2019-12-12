import React from "react"
import { Router } from "@reach/router"
// import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"
// import Loader from "../components/loader"
// import "../styles/styles.scss"
// import Layout from "../components/layout"

const HomeComp = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
}

const AccountComp = () => {
    if (!isAuthenticated()) {
        // login()
        // return <Loader />
        return <Link to="/account">Log In</Link>
    }

    const user = getProfile()

    return (
        // <Layout>
        <>
        <Router>
            <HomeComp path="/account/" user={user} />
        </Router>
        <nav className="text-blue-600 text-right">
            {/* <Link to="/account/">Home</Link>{" "} */}
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

        </>
        // </Layout>
    )
}

export default AccountComp