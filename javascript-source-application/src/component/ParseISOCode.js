import React, { useEffect } from "react"
import "../assets/css/style.css";

function ParseISO({ setLinesCount }) {

    useEffect(() => {
        setLinesCount(5)
    })
    return (
        <div className="py-4 px-4 no-scrollbar" style={{ fontVariantLigatures: "none" }}>
            <code className="language-javascript" >

                <span className="hljs-function" style={{ color: "#c397d8" }}>import</span>
                <span style={{ color: "#fff" }}> parseISO </span>
                <span className="hljs-function" style={{ color: "#c397d8" }}> from </span>
                <span style={{ color: "#b9ca4a" }}> 'date-fns/parseISO' </span>
                <br />
                <br />
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> parseISO(</span>
                <span style={{ color: "#b9ca4a" }}>'2020-01-01' </span>
                <span style={{ color: "#fff" }}>);</span>
                <br />
                <br />
                <span style={{ color: "#e78c45" }}  >console</span>
                <span style={{ color: "#fff" }}>.log(date);</span>
                <span style={{ color: "#969896" }}>{'// 2020-01-01T00:00:00.000Z'}</span>
                <br />

            </code>
        </div>
    );
}

export default ParseISO


// import parseISO from 'date-fns/parseISO';

// const date = parseISO('2020-01-01');

// console.log(date); // 2020-01-01T00:00:00.000Z