import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function NavBar () {
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "10px",
        margin: "0 6px 6px",
        background: "black",
        color: "blue",
      };
    return <NavLink
    to="/"
    exact
    style={linkStyles}
    activeStyle={{
      background: "darkblue",
    }}
    >
        Home
    </NavLink>

}
