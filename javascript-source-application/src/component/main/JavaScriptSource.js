import React, { useEffect, useState } from "react";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom"
import js_logo from "../../assets/images/js_logo.png";
import OutputResult from "./OutputResult";
import PaginationComponent from "../PaginationComponent";
import "../../assets/css/style.css";

function JavaScriptSource({ filteredlists, isSearching, setIsSearching, isSearch }) {

  let navigate = useNavigate();
  const [isMouseLeave, setIsMouseLeave] = useState(false);
  const [isButtonClicked, setIisButtonClicked] = useState(false);
  const [buttonClickedLabel, setButtonClickedLabel] = useState("");

  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [buttonId, setButtonId] = useState(-1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  useEffect(() => {
    if (isSearching) {
      setIisButtonClicked(false)
      setButtonClickedLabel("")
      setIsSearching(false)
    }

  }, [isSearching])


  const mouseEnterHandler = (id) => {
    setIsMouseEnter(true);
    setIsMouseLeave(false);
    setButtonId(id);
  }

  const mouseLeaveHandler = () => {
    setIsMouseEnter(false);
    setIsMouseLeave(true);
    setButtonId(-1);
  }
  const handleItemClick = (id, name, url) => {
    setIisButtonClicked(true)
    setButtonClickedLabel(name)
    navigate(`/${url}`)
  }

  return (
    <>
      <Container className="text-white bg-dark" style={isSearch || rowsPerPage === 5 ? { height: window.innerHeight} : {}} >
        <Row xs="2">
          <Col >
            <h3>JavaScript Solutions </h3>
            <div className="space-y-3">
              <ListGroup >
                {/* {filteredlists.map((list, index) => { */}
                {filteredlists.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((list, index) => {
                    return (
                      <>
                        <ListGroupItem
                          key={list.id}
                          action
                          tag="button"
                          className={
                            isMouseEnter && index === buttonId
                              ? "onMousesetTransformation marginForBottom text-white bg-dark"
                              : "marginForBottom resetTransformation text-white bg-dark"
                          }
                          onMouseEnter={() => {
                            mouseEnterHandler(index)
                          }}
                          onMouseLeave={() => {
                            mouseLeaveHandler()
                          }}
                          onClick={() => handleItemClick(index, list.problem, list.url)}

                        >
                          <img
                            src={js_logo}
                            alt="logo"
                            style={{
                              marginRight: 12,
                              height: 20,
                              width: 20,
                            }}
                          />

                          {list.problem}
                        </ListGroupItem>
                      </>
                    );
                  })}
                <ListGroupItem
                  className={
                    isMouseEnter && buttonId === -5
                      ? "onMousesetTransformation marginForBottom text-white bg-dark"
                      : "marginForBottom resetTransformation text-white bg-dark"
                  }
                  onMouseEnter={() => {
                    mouseEnterHandler(-5)
                  }}
                  onMouseLeave={() => {
                    mouseLeaveHandler()
                  }}
                >
                  <PaginationComponent
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredlists.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />

                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col>
            <OutputResult
              isButtonClicked={isButtonClicked}
              buttonClickedLabel={buttonClickedLabel}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JavaScriptSource;
