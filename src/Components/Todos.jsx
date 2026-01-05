import { Delete, Done, Edit } from "@mui/icons-material";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";

const TodoItem = React.memo(({ mission, onToggle, onEdit, onDelete }) => {
  const isCompleted = mission.completed;

  return (
    <Grid item xs={12} sm={6} md={4} key={mission.id}>
      <Paper
        sx={{
          maxWidth: "250px",
          minHeight: "170px",
          maxHeight: "220px",
          p: "15px",
          overflow: "auto",
          m: "10px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: isCompleted ? "#f5f5f5" : "white",
          opacity: isCompleted ? 0.7 : 1,
          transition: "0.3s",
          boxShadow: isCompleted ? "none" : 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: "15px",
            textDecoration: isCompleted ? "line-through" : "none",
            color: isCompleted ? "text.secondary" : "primary.main",
          }}
        >
          {mission?.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textTransform: "capitalize",
            flexGrow: 1,
            color: isCompleted ? "text.secondary" : "text.primary",
          }}
        >
          {mission?.desc}
        </Typography>

        <Box
          sx={{
            marginTop: "14px",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <IconButton
            sx={{ bgcolor: "#00ff1eff", ":hover": { bgcolor: "#03b317ff" } }}
            onClick={() => onToggle(mission.id)}
          >
            <Done sx={{ color: "white" }} />
          </IconButton>

          <IconButton
            sx={{ bgcolor: "#0000ff", ":hover": { bgcolor: "#00009cff" } }}
            onClick={() => onEdit(mission.id)}
            disabled={isCompleted}
          >
            <Edit sx={{ color: "white" }} />
          </IconButton>

          <IconButton
            sx={{
              bgcolor: "rgba(255,0,0,1)",
              ":hover": { bgcolor: "#b10202ff" },
            }}
            onClick={() => onDelete(mission.id)}
          >
            <Delete sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Paper>
    </Grid>
  );
});

export default TodoItem;
