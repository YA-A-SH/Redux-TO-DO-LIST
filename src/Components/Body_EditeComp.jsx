import { edite, mainSelector } from "../Slices/CalcSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import ModalComp from "./All_Modal";

const EditeComp = React.memo(({ open, setOpen, id }) => {
  const dispatch = useDispatch();
  const [txt, setTxt] = useState({ txt1: "", txt2: "" });
  const [showAlert, setShowAlert] = useState(false);
  const state = useSelector(mainSelector);
  const mission = state.find((mis) => mis.id === id);

  function editeMis() {
    dispatch(edite({ id: id, title: txt.txt1, desc: txt.txt2 }));
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
        headMsg="Edit The Mission"
        txt1={txt.txt1}
        txt2={txt.txt2}
        setTxt={setTxt}
        txt={txt}
        open={open}
        setOpen={setOpen}
        txtFieldLabel1={mission?.title + " ===> Edit It ?"}
        txtFieldLabel2={mission?.desc + " ===> This Is The Last Desc"}
        click={editeMis}
        btnMsg="Edite"
        showAlert={showAlert}
        alertMsg="The Mission Edited Successfully"
        alertColor="primary"
      />
    </>
  );
});

export default EditeComp;
