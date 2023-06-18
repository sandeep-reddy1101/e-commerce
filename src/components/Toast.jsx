import { useSelector } from "react-redux";

const Toast = () => {
  const userData = useSelector((state) => state.user.value);

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="liveToast"
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">
          {userData.login ? (
            <span className="text-success">
              Hi {userData.data.firstName} login is successful
            </span>
          ) : (
            <span className="text-danger">
              Something went wrong. Please try again
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toast;
