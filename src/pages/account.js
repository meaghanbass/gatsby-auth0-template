import React from "react"
// import { Router } from "@reach/router"
// import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { login, logout, isAuthenticated } from "../utils/auth"
// import { Link } from "gatsby"
import Loader from "../components/loader"
// import "../styles/styles.scss"
import Layout from "../components/layout"

// const Home = ({ user }) => {
//     return <p>Hi, {user.name ? user.name : "friend"}!</p>
// }

const Account = () => {
    if (!isAuthenticated()) {
        login()
        return <Loader />
    }

    // const user = getProfile()

    return (
        <Layout>
        <nav className="text-blue-600">
            {/* <Link to="/account/">Home</Link>{" "} */}
            <a
                href="#logout"
                onClick={e => {
                    logout()
                    e.preventDefault()
                }}
            >
                Log Out  (account.js)
            </a>
        </nav>
        {/* <Router>
            <Home path="/account/" user={user} />
        </Router> */}
        <p>FIX ME</p>
        </Layout>
    )
}

export default Account