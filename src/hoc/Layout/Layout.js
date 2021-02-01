import React from "react";
import "./Layout.scss"

const Layout = props => {
    return (
        <div className={"Layout"}>
            <header className="header">
                <div className="container">
                    Header
                    <hr/>
                </div>

            </header>

            <main>
                { props.children }
            </main>

            <footer className={"footer"}>
                <div className="container">
                    <hr/>
                    Footer
                </div>
            </footer>
        </div>
    )
}

export  default Layout