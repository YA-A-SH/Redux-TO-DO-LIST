import { Box, Button, Modal, Typography } from "@mui/material";
import { deleteMis } from "../Slices/CalcSlice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import AlertComp from "./All_Alert";
import { style } from "./All_Modal";

const DelComp = React.memo(({ open, setOpen, id }) => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  function delMis() {
    dispatch(deleteMis({ id }));
    setOpen(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3500);
    
  }
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h4" color="error" sx={{ textAlign: "center" }}>
            Are You Sure You Need To Delete This Mission ?
          </Typography>
          <Typography variant="h6" color="" sx={{ mt: "25px" }}>
            You Can't Go Back After Delete
          </Typography>
          <Box
            sx={{
              mt: 5.5,
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              color="warning"
              variant="contained"
              sx={{ width: "45%" }}
              onClick={delMis}
            >
              Delete
            </Button>

            <Button
              color="error"
              variant="outlined"
              sx={{ width: "45%" }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      {showAlert && (
        <AlertComp msg="The Mission Deleted Successfully" color="warning" />
      )}
    </>
  );
});

export default DelComp;
