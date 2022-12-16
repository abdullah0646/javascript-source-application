import React, { useEffect } from "react"
import "../assets/css/style.css"

function GmtToAustralianCode({ setLinesCount }) {

    useEffect(() => {
        setLinesCount(13)
    })

    return (
        <div className="py-4 px-4 no-scrollbar" style={{ fontVariantLigatures: "none" }}>
            <code className="language-javascript" >
                <span style={{ color: "#969896" }}>{'//create a function that converts gmt to australian central standard time'}</span>
                <br />

                <span className="hljs-function" style={{ color: "#c397d8" }}>function</span>

                <span className="hljs-function"> </span>

                <span className="hljs-function" style={{ color: "#7aa6da" }}>gmtToAus</span>

                <span className="hljs-function">(</span>

                <span className="hljs-function" style={{ color: "#e78c45" }}>gmt</span>

                <span className="hljs-function">) </span>
                <br />
                <span>{'{'}</span>
                <br />

                <span style={{ color: "#969896" }}>{'// return the time in australian central standard time'}</span>
                <br />
                <span style={{ color: "#c397d8" }}>return</span>
                <span style={{ color: "#fff" }}> gmt +
                </span>
                <span className="hljs-function" style={{ color: "#e78c45" }}> 9.5</span>
                <span style={{ color: "#fff" }}> ;
                </span>
                <br />
                <span>{'}'}</span>
                <br />
                <br />
                <span style={{ color: "#969896" }}>{'// call the function'}</span>
                <br />
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> result = gmtToAus(</span>

                <span style={{ color: "#e78c45" }}>10</span>

                <span style={{ color: "#fff" }}>);
                </span>


                <br />
                <br />
                <span style={{ color: "#969896" }}>{'// print the result'}</span>
                <br />
                <span style={{ color: "#e78c45" }}  >console</span>
                <span style={{ color: "#fff" }}>.log(result);</span>
                <br />

            </code>
        </div>
    );
}

export default GmtToAustralianCode
