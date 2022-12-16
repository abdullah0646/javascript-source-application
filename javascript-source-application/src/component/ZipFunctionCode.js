import React, { useEffect } from "react"
import "../assets/css/style.css";

function ZipFunctionCode({ setLinesCount }) {
    useEffect(() => {
        setLinesCount(8)
    })
    return (
        <div className="py-4 px-4 no-scrollbar" style={{ fontVariantLigatures: "none" }}>
            <code className="language-javascript" >
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> _ = </span>
                <span style={{ color: "#e78c45" }}>require</span>
                <span style={{ color: "#fff" }}>(</span>
                <span style={{ color: "#b9ca4a" }}>'underscore'</span>
                <span style={{ color: "#fff" }}>);</span>
                <br />
                <br />
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> a  = [</span>
                <span style={{ color: "#e78c45" }}>1</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#e78c45" }}>2</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#e78c45" }}>3</span>
                <span style={{ color: "#fff" }}>]</span>
                <span style={{ color: "#fff" }}>;</span>
                <br />
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> b  = [</span>
                <span style={{ color: "#e78c45" }}>4</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#e78c45" }}>5</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#e78c45" }}>6</span>
                <span style={{ color: "#fff" }}>]</span>
                <span style={{ color: "#fff" }}>;</span>
                <br />
                <br />
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}>  result = _.zip(a, b);</span>
                <br />
                <br />
                <span style={{ color: "#e78c45" }}  >console</span>
                <span style={{ color: "#fff" }}>.log(result);</span>
                <span style={{ color: "#969896" }}>{'// [[1, 4], [2, 5], [3, 6]]'}</span>
                <br />
            </code>
        </div>
    );
}


export default ZipFunctionCode

