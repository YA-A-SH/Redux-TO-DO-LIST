import { Alert } from "@mui/material";

export default function AlertComp({ color, msg }) {
  return (
    <>
      <Alert
        sx={{
          width: "400px",
          position: "absolute",
          top: "20%",
          left: "40%",
          transform: "translate(-20%, -40%)",
        }}
        color={color}
      >
        {msg}
      </Alert>
    </>
  );
}
