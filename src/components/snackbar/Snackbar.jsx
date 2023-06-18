import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../store";

import MuiAlert from "@mui/material/Alert";
import React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = () => {
  const snackbarObj = useSelector((state) => state.snackbar.value);
  const dispatch = useDispatch();
  const vertical = "top";
  const horizontal = "center";

  if (snackbarObj.open === true) {
    setTimeout(() => {
      handleClose();
    }, 5000);
  }

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <div>
      <Snackbar
        open={snackbarObj.open}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarObj.type ? snackbarObj.type : "info"}
          sx={{ width: "100%" }}
        >
          {snackbarObj.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
