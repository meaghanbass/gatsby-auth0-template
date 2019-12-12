import React from "react"
// import { Link } from "gatsby"
// import "../styles/styles.scss"
import AuthStatus from "./authstatus"

const Header = ({children}) => (
    <div className="w-screen bg-white">
        <div className="flex flex-row container justify-between items-center">
            <div className="">
                <h1 className="theme-font text-4xl">Algorithmic Trading</h1>
                <p className="font-thin text-xl font-sans mb-4">Resources for algotrading and indicator scripting in Python</p>
            </div>
            <div className="font-sans text-sm">
                {/* <Link to="/account">Log In</Link> */}
                <AuthStatus />

            </div>
        </div>
        <div className="w-screen theme-color h-16 flex items-center font-sans font-hairline text-white uppercase">
            <div className="container flex flex-row">
                <p className="mx-3">Overview</p>
                <ul className="mx-3">
                    <li>Item</li>
                </ul>
            </div>
        </div>
    </div>
)

export default Header