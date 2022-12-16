import { Alert } from "reactstrap";

function AlertComponent({ isAlert, alertText, className, color }) {
    return (
        <>
            <Alert color={color} isOpen={isAlert} className={className}>
                {alertText}
            </Alert>

        </>

    );
}

export default AlertComponent;



