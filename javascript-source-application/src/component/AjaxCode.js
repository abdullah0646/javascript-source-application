import React, { useEffect } from "react"
import "../assets/css/style.css"

function AjaxCode({ setLinesCount }) {

    useEffect(() => {
        setLinesCount(19)
    })

    return (
        <div className="py-4 px-4 no-scrollbar" style={{ fontVariantLigatures: "none" }}>
            <code className="language-javascript" >
                <span style={{ color: "#969896" }}>{'// create a new XMLHttpRequest object'}</span>
                <br />
                <span style={{ color: "#c397d8" }}>const</span>
                <span style={{ color: "#fff" }}> xhr = </span>
                <span style={{ color: "#e78c45" }}>new </span>
                <span style={{ color: "#fff" }}>XMLHttpRequest();</span>
                <br />
                <br />
                <span style={{ color: "#969896" }}>{'// open a new request, using the GET http method on the URL endpoint'}</span>
                <br />
                <span style={{ color: "#fff" }}>xhr.open(</span>
                <span style={{ color: "#b9ca4a" }}>'GET'</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#b9ca4a" }}>'https://api-to-call.com/endpoint'</span>
                <span style={{ color: "#fff" }}>);</span>
                <br />
                <br />
                <span style={{ color: "#969896" }}>{'// set the request header'}</span>
                <br />
                <span style={{ color: "#fff" }}>xhr.setRequestHeader(</span>
                <span style={{ color: "#b9ca4a" }}>'Content-Type'</span>
                <span style={{ color: "#fff" }}>,</span>
                <span style={{ color: "#b9ca4a" }}>'application/json'</span>
                <span style={{ color: "#fff" }}>);</span>
                <br />
                <br />
                <span style={{ color: "#969896" }}>{'// access the onload property, and assign a callback function'}</span>
                <br />
                <span style={{ color: "#fff" }}>xhr.onload = </span>
                <span style={{ color: "#c397d8" }}>function</span>
                <span style={{ color: "#fff" }}>() {'{'}</span>
                <br />
                <span style={{ color: "#969896" }}>{'// if the request status is 200, print success'}</span>
                <br />
                <span style={{ color: "#c397d8" }}>if</span>
                <span style={{ color: "#fff" }}>(xhr.status === </span>
                <span style={{ color: "#e78c45" }}>200</span>
                <span style={{ color: "#fff" }}>) {'{'}</span>
                <br />
                <span style={{ color: "#e78c45" }}  >console</span>
                <span style={{ color: "#fff" }}>.log(</span>
                <span style={{ color: "#b9ca4a" }}>'success'</span>
                <span style={{ color: "#fff" }}>);</span>
                <br />
                <span style={{ color: "#fff" }}>{'}'}</span>
                <span style={{ color: "#c397d8" }}>else</span>
                <span style={{ color: "#fff" }}>{'{'}</span>
                <br />
                <span style={{ color: "#969896" }}>{'// otherwise, print error'}</span>
                <br />
                <span style={{ color: "#e78c45" }}  >console</span>
                <span style={{ color: "#fff" }}>.log(</span>
                <span style={{ color: "#b9ca4a" }}>'success'</span>
                <span style={{ color: "#fff" }}>);</span>
                <br />
                <span style={{ color: "#fff" }}>{'}'}</span>
                <br />
                <span style={{ color: "#fff" }}>{'};'}</span>
            </code>
        </div>
    );
}

export default AjaxCode
