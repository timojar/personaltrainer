import React from "react";
import { useFormik } from "formik";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import trainingService from "../services/training";

export default function DeleteTraining(props) {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);

  const {url} = props;

  const deleteTraining = (url) => {
    console.log(url); 
    trainingService.deleteTraining(url)   
  };
 
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>
        Delete Training
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <label>Are you sure want to delete?</label> 
      <br/> 
      <br/>   
      <button onClick={() => deleteTraining(url)}>Yes</button>

        <button onClick={closeModal}>No</button>
      
      </Popup>
    </div>
  );
}
