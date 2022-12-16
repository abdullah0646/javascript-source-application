import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import js_logo from "../../assets/images/js_logo.png";
import LikeButton from "../LikeButton";
import CountButton from "../CountButton";
import CopyToClipboardButton from "../CopyToClipboardButton";
import DisplayCode from "../DisplayCode";
import AlertComponent from "../../base/AlertComponent";
import "../../assets/css/style.css";


function OutputResult({ isButtonClicked, buttonClickedLabel }) {

  const [characterCount, setCharacterCount] = useState(0);
  const [linesCount, setLinesCount] = useState(0);
  const [isCodeCopyAlert, setIsCodeCopyAlert] = useState(false);
  const [copyCodeAlertText, setCopyCodeAlertText] = useState("");
  const [isLinkCopyAlert, setIsLinkCopyAlert] = useState(false);
  const [copyLinkAlertText, setCopyLinkAlertText] = useState("");

  if (isCodeCopyAlert) {
    setTimeout(() => { setIsCodeCopyAlert(false) }, 2000);
  }
  if (isLinkCopyAlert) {
    setTimeout(() => { setIsLinkCopyAlert(false) }, 2000);
  }

  function getCount() {
    let tag = document.getElementById("parent-div-1");
    if (tag !== null) {
      setCharacterCount(tag.innerText.length)
    }
  }

  useEffect(() => {
    getCount()
  },)

  return (<div>
    {isCodeCopyAlert || isLinkCopyAlert ?
      <>
        <AlertComponent isAlert={isCodeCopyAlert}
          alertText={copyCodeAlertText}
          className="textAlignForCenter"
          color="secondary"
        />
        <AlertComponent isAlert={isLinkCopyAlert}
          alertText={copyLinkAlertText}
          className="textAlignForCenter"
          color="secondary"
        />
      </>
      : <></>

    }

    {isButtonClicked ? <>  <Container>
      <Row>
        <Col className="textAlignForLeft  OutputResultlabelFont">
          {buttonClickedLabel}
        </Col>
      </Row>
    </Container>

      <ListGroup>
        <ListGroupItem
          color="text-white bg-dark"
        >
          <div className="text-white bg-dark ">
            <img
              src={js_logo}
              alt="logo"
              style={{
                marginRight: 12,
                height: 20,
                width: 20,
              }}
            />
            index.tsx
            <CopyToClipboardButton
              setCopyCodeAlertText={setCopyCodeAlertText}
              setIsCodeCopyAlert={setIsCodeCopyAlert}
              setCopyLinkAlertText={setCopyLinkAlertText}
              setIsLinkCopyAlert={setIsLinkCopyAlert}
            />
          </div>
        </ListGroupItem>
        <ListGroupItem color="text-white bg-dark"  >
          <div id="parent-div-1">
            <DisplayCode buttonClickedLabel={buttonClickedLabel} setLinesCount={setLinesCount} />
          </div>
        </ListGroupItem>
        <ListGroupItem
          className="marginForBottom"
          color="text-white bg-dark"
        >
          <div className="text-white bg-dark ">
            <LikeButton buttonClickedLabel={buttonClickedLabel} />
            <CountButton linesCount={linesCount} characterCount={characterCount} />
          </div>
        </ListGroupItem>
      </ListGroup></> : <></>}
  </div>);
}

export default OutputResult;
