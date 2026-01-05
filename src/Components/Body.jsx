import { Container, Fab, Grid, Alert } from "@mui/material";
import DelComp from "./Body_Delete";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainSelector, toggleComplete } from "../Slices/CalcSlice";
import AddComp from "./Body_AddComp";
import EditeComp from "./Body_EditeComp";
import TodoItem from "./Todos"; // ✅ استدعاء default
import AlertComp from "./All_Alert";
export default function Body() {
  const state = useSelector(mainSelector);
  const dispatch = useDispatch();
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdite, setOpenEdite] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editeId, setEditeId] = useState(null);

  const todos = state.map((mission) => (
    <TodoItem
      key={mission.id}
      mission={mission}
      onToggle={(id) => {
        dispatch(toggleComplete(id));
        if (!mission.completed) {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3500);
        }
      }}
      onEdit={(id) => {
        setOpenEdite(true);
        setEditeId(id);
      }}
      onDelete={(id) => {
        setOpenDel(true);
        setDeleteId(id);
      }}
    />
  ));

  const missions = useSelector((state) => state.main.missions);

  useEffect(() => {
    localStorage.setItem("missions", JSON.stringify(missions));
  }, [missions]);

  return (
    <Container maxWidth="lg" sx={{ overflow: "auto" }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          bgcolor: "rgb(25 118 210)",
          borderRadius: "25px",
          marginTop: "86px",
          padding: "10px",
        }}
      >
        {todos}
      </Grid>

      <DelComp open={openDel} setOpen={setOpenDel} id={deleteId} />
      <EditeComp open={openEdite} setOpen={setOpenEdite} id={editeId} />

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: "10px", right: "10px" }}
        onClick={() => setOpenAdd(true)}
      >
        <AddIcon />
      </Fab>
      <AddComp open={openAdd} setOpen={setOpenAdd} />

      {showAlert && (
        <AlertComp msg="The Mission Done Gooooooode Joobe" color="success" />
      )}
    </Container>
  );
}
