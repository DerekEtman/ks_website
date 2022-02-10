import React from "react"
import NavBar from "../components/nav/NavBar"

const DefaultLayout = ({children}) => {

    return(
        <div>
            <header>
                <NavBar />
            </header>

            {children}

            <footer>
                footer
            </footer>
        </div>
    )
}

export default DefaultLayout