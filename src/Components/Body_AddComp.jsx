import { AddMission } from "../Slices/CalcSlice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import ModalComp from "./All_Modal";

const AddComp = React.memo(({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [txt, setTxt] = useState({ txt1: "", txt2: "" });
  const [showAlert, setShowAlert] = useState(false);

  function addMis() {
    dispatch(AddMission({ title: txt.txt1, desc: txt.txt2 }));
    setOpen(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3500);
    setTxt({ txt1: "", txt2: "" });
  }

  return (
    <>
      <ModalComp
        headMsg="Add A New Mission"
        txt1={txt.txt1}
        txt2={txt.txt2}
        setTxt={setTxt}
        txt={txt}
        open={open}
        setOpen={setOpen}
        txtFieldLabel1="Enter The Mission Title"
        txtFieldLabel2="Enter The Mission Description"
        click={addMis}
        btnMsg="Add"
        showAlert={showAlert}
        alertMsg="The Mission Added Successfully"
        alertColor="success"
      />
    </>
  );
});
export default AddComp;
