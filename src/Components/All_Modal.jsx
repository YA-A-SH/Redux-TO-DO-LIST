import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AlertComp from "./All_Alert";
import { LineAxis } from "@mui/icons-material";
export const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #1976d2",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};
export default function ModalComp({
  headMsg,
  txt1,
  txt2,
  txt,
  setTxt,
  open,
  setOpen,
  txtFieldLabel1,
  txtFieldLabel2,
  click,
  btnMsg,
  showAlert,
  alertMsg,
  alertColor,
}) {
  console.log(open);
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h4" color="primary">
            {headMsg}
          </Typography>
            
          <TextField
            value={txt1}
            onChange={(e) => setTxt({ ...txt, txt1: e.target.value })}
            required
            label={txtFieldLabel1}
            sx={{ mt: 5 }}
            fullWidth
          />

          <TextField
            value={txt2}
            onChange={(e) => setTxt({ ...txt, txt2: e.target.value })}
            required
            label={txtFieldLabel2}
            sx={{ mt: 3 }}
            fullWidth
          />

          <Box
            sx={{
              mt: 5.5,
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              color="primary"
              variant="contained"
              sx={{ width: "45%" }}
              onClick={click}
              disabled={txt.txt1 === "" ? true : false}
            >
              {btnMsg}
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
      {showAlert && <AlertComp msg={alertMsg} color={alertColor} />}
    </>
  );
}
