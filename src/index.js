import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Layout from "./hoc/Layout/Layout"
import "bootstrap/dist/css/bootstrap.css"
import "./index.scss"

const app = (
    <Layout>
        <div className="container">
            <App />
        </div>
    </Layout>
)

ReactDOM.render(app, document.getElementById('root'))