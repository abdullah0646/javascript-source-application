export function CopyCodeToClipboard(containerid, setCopyCodeAlertText, setIsCodeCopyAlert) {
    if (document.selection) {
        let range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
    } else if (window.getSelection) {
        let range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        var sel = window.getSelection();
        sel.removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        setCopyCodeAlertText("Copied code to clipboard!")
        setIsCodeCopyAlert(true);
    }
}

export function CopyLinkToClipboard(setCopyLinkAlertText, setIsLinkCopyAlert) {
    navigator.clipboard.writeText(window.location.href);
    setCopyLinkAlertText("Copied link to clipboard!")
    setIsLinkCopyAlert(true);
}


