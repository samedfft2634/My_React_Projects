import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

const link = document.createElement("link");
link.rel = 'icon';
link.href = '/favicon.ico'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <App />
)

document.head.appendChild(link);
