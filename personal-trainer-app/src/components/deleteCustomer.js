import React from "react";
import { useFormik } from "formik";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import customerService from "../services/customer";

export default function DeleteCustomer(props) {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);

  const {url} = props;

  const deleteCustomer = (url) => {
    console.log(url); 
    customerService.deleteCustomer(url)   
  };
 
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>
        Delete Customer
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <label>Are you sure want to delete?</label> 
      <br/> 
      <br/>   
      <button onClick={() => deleteCustomer(url)}>Yes</button>

        <button onClick={closeModal}>No</button>
      
      </Popup>
    </div>
  );
}
