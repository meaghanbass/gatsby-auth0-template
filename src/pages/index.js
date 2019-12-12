import React from "react"
// import { Link } from "gatsby"
import "../styles/styles.scss"
import "../styles/imports.css"
import Layout from "../components/layout"


export default ({children}) => (
    <Layout>
        <div>
            {/* <p className="text-blue-600">hello gatsby (index.js)</p> */}
            {/* <Link to="/account">Go to your account (index.js)</Link> */}
            {children}
        </div>
    </Layout>
)