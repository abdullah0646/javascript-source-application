import React, { useEffect } from "react"
import "../assets/css/style.css"

function IsbooleanFunctionCode({ setLinesCount }) {
    useEffect(() => {
        setLinesCount(5)
    })
    return (
        <div className="py-4 px-4 no-scrollbar" style={{ fontVariantLigatures: "none", }}>
            <code className="language-javascript" >
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> _ = </span>
                <span style={{ color: "#e78c45" }}>require</span>
                <span style={{ color: "#fff" }}>(</span>
                <span style={{ color: "#b9ca4a" }}>'lodash'</span>
                <span style={{ color: "#fff" }}>);</span>
                <br />
                <br />
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> isBoolean = _.isBoolean(</span>
                <span style={{ color: "#e78c45" }}>true</span>
                <span style={{ color: "#fff" }}>);</span>
                <br />
                <br />
                <span style={{ color: "#e78c45" }}  >console</span>
                <span style={{ color: "#fff" }}>.log(isBoolean);</span>
                <span style={{ color: "#969896" }}>{'// true'}</span>
                <br />
            </code>
        </div>
    );
}


export default IsbooleanFunctionCode

