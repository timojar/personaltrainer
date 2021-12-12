import React from "react";
import { useFormik } from "formik";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function CustomerForm() {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.brand = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.lastname) {
      errors.lastname = "Required";
    }

    if (!values.phone) {
      errors.phone = "Required";
    }

    if (!values.postcode) {
      errors.postcode = "Required";
    }

    if (!values.streetaddress) {
      errors.streetaddress = "Required";
    }

    return errors;
  };

  const sendData = (customer) => {
    const customerData = JSON.stringify(customer);
    console.log(customerData + "testinä");
    console.log(customerData);
    fetch("https://customerrest.herokuapp.com/api/customers", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: customerData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        window.location.reload(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        window.location.reload(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      postcode: "",
      streetaddress: "",
    },
    validate,
    onSubmit: (values) => {
      const customer = { ...values };
      console.log(customer);
      sendData(customer);
    },
  });
  return (
    <div>
      <a className="create" onClick={() => setOpen((o) => !o)}>
        Create Customer
      </a>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>

      <form onSubmit={formik.handleSubmit}>
        <br />
        <label htmlFor="firstname">fisrtname</label>
        <br />
        <input
          id="firstname"
          name="firstname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstname}
        />
        {formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}
        <br />
        <label htmlFor="fisrtname">lastname</label>
        <br />
        <input
          id="lastname"
          name="lastname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
        {formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
        <br />
        <label htmlFor="email">email</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <br />
        <label htmlFor="phone">phone</label>
        <br />
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
        <br />
        <label htmlFor="postcode">postcode</label>
        <br />
        <input
          id="postcode"
          name="postcode"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.postcode}
        />
        {formik.errors.postcode ? <div>{formik.errors.postcode}</div> : null}
        <br />
        <label htmlFor="streetaddress">streetaddress</label>
        <br />
        <input
          id="streetaddress"
          name="streetaddress"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.streetaddress}
        />
        {formik.errors.streetaddress ? (
          <div>{formik.errors.streetaddress}</div>
        ) : null}
        <br />
        <br />
        <button type="submit">Submit</button>
        <button onClick={closeModal} >Cancel</button>
      </form>
      </Popup>
    </div>
  );
}
