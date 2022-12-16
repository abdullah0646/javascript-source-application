import React from "react";
import { Button } from "reactstrap";
import { CopyCodeToClipboard, CopyLinkToClipboard } from "../base/functions";
import "../assets/css//style.css"

function CopyToClipboardButton({ setCopyCodeAlertText, setIsCodeCopyAlert,
    setCopyLinkAlertText,
    setIsLinkCopyAlert

}) {
    return (
        <>
            <Button className="floatRight textAfterlikeButtons"
                onClick={() => { CopyCodeToClipboard("parent-div-1", setCopyCodeAlertText, setIsCodeCopyAlert) }}
            >
                <svg height="1.4em"
                    width="1.4em"
                    viewBox="0 0 22 23"
                    fill="none"
                >
                    <path d="M7 7V4.2C7 3.0799 7 2.51984 7.21799 2.09202C7.40973 1.71569 7.71569 1.40973 8.09202 1.21799C8.51984 1 9.07989 1 10.2 1H17.8C18.9201 1 19.4802 1 19.908 1.21799C20.2843 1.40973 20.5903 1.71569 20.782 2.09202C21 2.51984 21 3.0799 21 4.2V11.8C21 12.9201 21 13.4802 20.782 13.908C20.5903 14.2843 20.2843 14.5903 19.908 14.782C19.4802 15 18.9201 15 17.8 15H15M4.2 21H11.8C12.9201 21 13.4802 21 13.908 20.782C14.2843 20.5903 14.5903 20.2843 14.782 19.908C15 19.4802 15 18.9201 15 17.8V10.2C15 9.07989 15 8.51984 14.782 8.09202C14.5903 7.71569 14.2843 7.40973 13.908 7.21799C13.4802 7 12.9201 7 11.8 7H4.2C3.0799 7 2.51984 7 2.09202 7.21799C1.71569 7.40973 1.40973 7.71569 1.21799 8.09202C1 8.51984 1 9.07989 1 10.2V17.8C1 18.9201 1 19.4802 1.21799 19.908C1.40973 20.2843 1.71569 20.5903 2.09202 20.782C2.51984 21 3.07989 21 4.2 21Z" stroke="#FFF7ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                    </path>
                </svg>
            </Button>

            <Button className="floatRight textAfterlikeButtons"
                onClick={() => {
                    CopyLinkToClipboard(
                        setCopyLinkAlertText,
                        setIsLinkCopyAlert)
                }
                }
            >
                <svg
                    height="1.4em"
                    width="1.4em"
                    viewBox="0 0 23 23"
                    fill="none"
                >
                    <path d="M9.29302 0.292893C9.68354 -0.0976311 10.3167 -0.0976311 10.7072 0.292893L14.7072 4.29289C15.0978 4.68342 15.0978 5.31658 14.7072 5.70711C14.3167 6.09763 13.6835 6.09763 13.293 5.70711L11.0001 3.41421L11.0001 13C11.0001 13.5523 10.5524 14 10.0001 14C9.44784 14 9.00012 13.5523 9.00012 13L9.00012 3.41421L6.70723 5.70711C6.3167 6.09763 5.68354 6.09763 5.29302 5.70711C4.90249 5.31658 4.90249 4.68342 5.29302 4.29289L9.29302 0.292893Z" fill="#FFF7ED"></path><path d="M4.86252 8.00005L5.0001 8.0001C5.55238 8.0001 6.0001 8.44781 6.0001 9.0001C6.0001 9.55238 5.55238 10.0001 5.0001 10.0001C4.00574 10.0001 3.70474 10.0087 3.48246 10.0682C2.79227 10.2532 2.25318 10.7923 2.06824 11.4825C2.00869 11.7047 2.0001 12.0057 2.0001 13.0001V14.2001C2.0001 15.0567 2.00087 15.639 2.03765 16.0891C2.07347 16.5275 2.13839 16.7517 2.21808 16.9081C2.40983 17.2844 2.71579 17.5904 3.09211 17.7821C3.24852 17.8618 3.47272 17.9267 3.91113 17.9625C4.36122 17.9993 4.94352 18.0001 5.8001 18.0001H14.2001C15.0567 18.0001 15.639 17.9993 16.0891 17.9625C16.5275 17.9267 16.7517 17.8618 16.9081 17.7821C17.2844 17.5904 17.5904 17.2844 17.7821 16.9081C17.8618 16.7517 17.9267 16.5275 17.9625 16.0891C17.9993 15.639 18.0001 15.0567 18.0001 14.2001V13.0001C18.0001 12.0057 17.9915 11.7047 17.9319 11.4825C17.747 10.7923 17.2079 10.2532 16.5177 10.0682C16.2955 10.0087 15.9944 10.0001 15.0001 10.0001C14.4478 10.0001 14.0001 9.55238 14.0001 9.0001C14.0001 8.44781 14.4478 8.0001 15.0001 8.0001L15.1377 8.00005C15.9331 7.99962 16.5237 7.9993 17.0354 8.13639C18.4157 8.50626 19.4939 9.58445 19.8638 10.9648C20.0009 11.4765 20.0006 12.0671 20.0001 12.8625L20.0001 14.2414C20.0001 15.0464 20.0001 15.7107 19.9559 16.2519C19.91 16.814 19.8114 17.3307 19.5641 17.8161C19.1806 18.5687 18.5687 19.1806 17.8161 19.5641C17.3307 19.8114 16.814 19.91 16.2519 19.9559C15.7107 20.0001 15.0464 20.0001 14.2414 20.0001H5.75882C4.95384 20.0001 4.28947 20.0001 3.74827 19.9559C3.18617 19.91 2.66947 19.8114 2.18414 19.5641C1.43149 19.1806 0.819564 18.5687 0.436071 17.8161C0.18878 17.3307 0.0902153 16.814 0.0442901 16.2519C7.27288e-05 15.7107 8.32179e-05 15.0464 9.59733e-05 14.2414L4.72167e-05 12.8625C-0.000383487 12.0671 -0.00070332 11.4765 0.136393 10.9648C0.506262 9.58445 1.58445 8.50626 2.96482 8.13639C3.47647 7.9993 4.06713 7.99962 4.86252 8.00005Z" fill="#FFF7ED">

                    </path>
                </svg>
            </Button>
        </>
    );
}

export default CopyToClipboardButton;



