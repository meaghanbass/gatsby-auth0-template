import React from "react"
// import { Link } from "gatsby"
import "../styles/styles.css"

const Layout = ({children}) => (
    <div>
        <p className="text-red-600">layout</p>
        {children}
    </div>
);

export default Layout;