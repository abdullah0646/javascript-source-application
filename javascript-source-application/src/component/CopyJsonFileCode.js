import React, { useEffect } from "react"
import "../assets/css/style.css"

function CopyJsonFileCode({ setLinesCount }) {
    useEffect(() => {
        setLinesCount(10)
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
                <span style={{ color: "#969896" }}>{'// parse the file'}</span>
                <br />
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> json = </span>
                <span style={{ color: "#e78c45" }}>JSON</span>
                <span style={{ color: "#fff" }}>.parse(data);</span>
                <br />
                <br />
                <span style={{ color: "#969896" }}>{'// write the file'}</span>
                <br />
                <span style={{ color: "#fff" }}>fs.writeFileSync(</span>
                <span style={{ color: "#b9ca4a" }}>'copy.json'</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#e78c45" }}> JSON</span>
                <span style={{ color: "#fff" }}>.stringify(json));</span>
                <br />
            </code>
        </div>
    );
}

export default CopyJsonFileCode
