import React, { useEffect } from "react"
import "../assets/css/style.css";

function ReacFileCode({ setLinesCount }) {
    useEffect(() => {
        setLinesCount(7)
    })
    return (
        <div className="py-4 px-4 no-scrollbar" style={{ fontVariantLigatures: "none" }}>
            <code className="language-javascript" >
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> fs = </span>
                <span style={{ color: "#e78c45" }}>require</span>
                <span style={{ color: "#fff" }}>(</span>
                <span style={{ color: "#b9ca4a" }}>'fs'</span>
                <span style={{ color: "#fff" }}>);</span>
                <br />
                <br />
                <span style={{ color: "#969896" }}>{'// read the file'}</span>
                <br />
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> data = fs.readFileSync(</span>
                <span style={{ color: "#b9ca4a" }}>'file.txt'</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#b9ca4a" }}> 'utf8'</span>
                <span style={{ color: "#fff" }}>);</span>
                <br />
                <br />
                <span style={{ color: "#969896" }}>{'// print the file'}</span>
                <br />
                <span style={{ color: "#e78c45" }}  >console</span>
                <span style={{ color: "#fff" }}>.log(date);</span>
                <br />
            </code>
        </div>
    );
}


export default ReacFileCode
