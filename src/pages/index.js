import React from "react"
import { Link } from "gatsby"
import "../styles/styles.css"
import Layout from "../components/layout"


export default () => (
    <Layout>
        <div>
            <p className="text-blue-600">hello gatsby</p>
            <Link to="/account">Go to your account</Link>
        </div>
    </Layout>
)