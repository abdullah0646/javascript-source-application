import React, { useEffect } from "react"
import "../assets/css/style.css"

function FirstElementinArrayCode({ setLinesCount }) {
    useEffect(() => {
    setLinesCount(7)
    })
    return (
        <div className="py-4 px-4 no-scrollbar" style={{ fontVariantLigatures: "none" }}>
            <code className="language-javascript" >
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> array = [</span>
                <span style={{ color: "#e78c45" }}>1</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#e78c45" }}>2</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#e78c45" }}>3</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#e78c45" }}>4</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#e78c45" }}>5</span>
                <span style={{ color: "#fff" }}>]</span>
                <span style={{ color: "#fff" }}>;</span>
                <br />
                <br />
                <span style={{ color: "#969896" }}>{'// find the first element in the array'}</span>
                <br />
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> first = array[</span>
                <span style={{ color: "#e78c45" }}>0</span>
                <span style={{ color: "#fff" }}>]</span>
                <span style={{ color: "#fff" }}>;</span>
                <br />
                <br />
                <span style={{ color: "#969896" }}>{'// print the file'}</span>
                <br />
                <span style={{ color: "#e78c45" }}  >console</span>
                <span style={{ color: "#fff" }}>.log(first);</span>
                <br />
            </code>
        </div>
    );
}

export default FirstElementinArrayCode
