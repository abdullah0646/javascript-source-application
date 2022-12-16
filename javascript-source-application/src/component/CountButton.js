import React from "react";
import { Button } from "reactstrap";
import "../assets/css/style.css"

function CountButton({linesCount,characterCount}) {
    return (
        <>
          <Button size="sm" className="floatRight textAfterlikeButtons">
              {linesCount ?? 0} lines
            </Button>
            <Button size="sm" className="floatRight textAfterlikeButtons">
              {characterCount ?? 0} chars
            </Button>
        </>
    );
}

export default CountButton;



