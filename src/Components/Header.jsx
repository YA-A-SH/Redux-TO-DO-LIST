import { Stack, Typography } from "@mui/material";

export default function Header() {
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography variant="h3" color="primary" sx={{ marginTop: "20px" }}>
        Redux CRUD ( TDL )
      </Typography>
    </Stack>
  );
}
