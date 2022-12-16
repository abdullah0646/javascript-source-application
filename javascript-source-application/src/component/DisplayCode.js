import React from "react";
import AjaxCode from "./AjaxCode";
import ParseISO from "./ParseISOCode";
import ReacFileCode from "./ReadFileCode";
import ZipFunctionCode from "./ZipFunctionCode";
import CopyJsonFileCode from "./CopyJsonFileCode";
import PullallFunctionCode from "./PullallFunctionCode";
import GmtToAustralianCode from "./GmtToAustralianCode";
import IsbooleanFunctionCode from "./IsbooleanFunctionCode";
import FirstElementinArrayCode from "./FirstElementinArrayCode";
import ThreeArgumentsFunctionCode from "./ThreeArgumentsFunctionCode";


function DisplayCode({ buttonClickedLabel, setLinesCount }) {
    return (
        <>
            {
                buttonClickedLabel === "create a function that takes in 3 arguments in javascript" ? <>
                    <ThreeArgumentsFunctionCode setLinesCount={setLinesCount} />

                </> : <>

                </>
            }
            {
                buttonClickedLabel === "how to use the parseiso function from date-fns in javascript" ? <>
                    <ParseISO setLinesCount={setLinesCount} />
                </> : <>

                </>
            }
            {
                buttonClickedLabel === "convert gmt to australian central standard time in javascript" ? <>
                    <GmtToAustralianCode setLinesCount={setLinesCount} />
                </> : <>

                </>
            }
            {
                buttonClickedLabel === "how to read a file in javascript" ? <>
                    <ReacFileCode setLinesCount={setLinesCount} />
                </> : <>

                </>
            }
            {
                buttonClickedLabel === "find the first element in an array in javascript" ? <>
                    <FirstElementinArrayCode setLinesCount={setLinesCount} />
                </> : <>

                </>
            }
            {
                buttonClickedLabel === "how to use the zip function from the underscore library in javascript" ? <>
                    <ZipFunctionCode setLinesCount={setLinesCount} />
                </> : <>

                </>
            }
            {
                buttonClickedLabel === "how to use the isboolean function from lodash in javascript" ? <>
                    <IsbooleanFunctionCode setLinesCount={setLinesCount} />
                </> : <>

                </>
            }
            {
                buttonClickedLabel === "ajax in javascript" ? <>
                    <AjaxCode setLinesCount={setLinesCount} />
                </> : <>

                </>
            }
            {
                buttonClickedLabel === "copy a json file in javascript" ? <>
                    <CopyJsonFileCode setLinesCount={setLinesCount} />
                </> : <>

                </>
            }
            {
                buttonClickedLabel === "how to use the pullall function from lodash in javascript" ? <>
                    <PullallFunctionCode setLinesCount={setLinesCount} />
                </> : <>

                </>
            }
        </>
    );
}

export default DisplayCode;



