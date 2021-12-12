import React from "react";
import { useFormik } from "formik";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function TrainingForm(props) {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  const { customers } = props;
  const validate = (values) => {
    const errors = {};
    if (!values.activity) {
      errors.activity = "Required";
    }

    if (!values.date) {
      errors.date = "Required";
    }
    if (!values.duration) {
      errors.duration = "Required";
    }

    if (!values.customer) {
      errors.customer = "Required";
    }

    return errors;
  };

  const sendData = (training) => {
    const trainingData = JSON.stringify(training);
    console.log(trainingData );    
    fetch("https://customerrest.herokuapp.com/api/trainings", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: trainingData,
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
      activity: "",
      duration: "",
      date: "",
      customer: "",
    },
    validate,
    onSubmit: (values) => {
      const training = { ...values };
      console.log(training);
      sendData(training)
    },
  });
  return (
    <div>
      <p className="create" onClick={() => setOpen((o) => !o)}>
        Create training for customer
      </p>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <form onSubmit={formik.handleSubmit}>
          <br />
          <label htmlFor="activity">activity</label>
          <br />
          <input
            id="activity"
            name="activity"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.activity}
          />
          {formik.errors.activity ? <div>{formik.errors.activity}</div> : null}
          <br />
          <label htmlFor="duration">duration</label>
          <br />
          <input
            id="duration"
            name="duration"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.duration}
          />
          {formik.errors.duration ? <div>{formik.errors.duration}</div> : null}
          <br />
          <label htmlFor="date">Model</label>
          <br />
          <input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          {formik.errors.date ? <div>{formik.errors.date}</div> : null}
          <br />
          <label htmlFor="customer">customer</label>
          <br />

          <select
            name="customer"
            value={formik.values.customer}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ display: "block" }}
          >
            {customers.map((c, index) => (
              <option
                key={index}
                value={c.links[1].href}
                label={c.firstname + " " + c.lastname}
              />
            ))}
          </select>
          {formik.errors.customer ? <div>{formik.errors.customer}</div> : null}
          <br />

          <br />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </Popup>
    </div>
  );
}
