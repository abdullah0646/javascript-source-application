import React, { useEffect } from "react"
import "../assets/css/style.css";

function ThreeArgumentsFunctionCode({ setLinesCount }) {
    useEffect(() => {
        setLinesCount(10)
    })
    return (
        <div className="py-4 px-4 no-scrollbar" style={{ fontVariantLigatures: "none" }}>
            <code className="language-javascript" >
                <span style={{ color: "#969896" }}>{'// create a function that takes in 3 arguments'}</span>
                <br />
                <span className="hljs-function" style={{ color: "#c397d8" }}>function</span>

                <span className="hljs-function"> </span>

                <span className="hljs-function" style={{ color: "#7aa6da" }}>sum</span>

                <span className="hljs-function">(</span>

                <span className="hljs-function" style={{ color: "#e78c45" }}>a, b, c</span>

                <span className="hljs-function">) </span>
                <br />
                <span>{'{'}</span>
                <br />

                <span style={{ color: "#969896" }}>{'// return the sum of a, b, and c'}</span>
                <br />
                <span style={{ color: "#c397d8" }}>return</span>
                <span style={{ color: "#fff" }}> a + b + c;
                </span>
                <br />
                <span>{'}'}</span>
                <br />
                <span style={{ color: "#969896" }}>{'// call the function'}</span>
                <br />

                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> result = sum(</span>

                <span style={{ color: "#e78c45" }}>1</span>
                <span>, </span>

                <span style={{ color: "#e78c45" }}>2</span>
                <span>, </span>

                <span style={{ color: "#e78c45" }}>3</span>
                <span style={{ color: "#fff" }}>);
                </span>

                <br />

                <span style={{ color: "#969896" }}>{'// print the result'}</span>
                <br />
                <span style={{ color: "#e78c45" }}  >console</span>
                <span style={{ color: "#fff" }}>.log(result);</span>
            </code>
        </div>
    );
}

export default ThreeArgumentsFunctionCode


