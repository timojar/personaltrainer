import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function CustomerEditForm(props) {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  const [customer, setCustomer] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    postcode: "",
    streetaddress: "",
  });
  
  const openModal = () => {
    setCustomer(props.customer);
    setOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(customer.links[1].href);
    const url = customer.links[1].href;
    sendData(customer, url)
  };

  const handleChange = (event) => {
    console.log(event.target.name);  
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  const sendData = (customer, url) => {
    const customerData = JSON.stringify(customer);
    console.log(customerData + "testinä");
    console.log(customerData);
    fetch(url, {
      method: "PUT", // or 'PUT'
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

  return (
    <div>
      <button type="button" className="button" onClick={() => openModal()}>
        Edit
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <form onSubmit={handleSubmit}>
          <br />
          <label htmlFor="firstname">fisrtname</label>
          <br />
          <input
            id="firstname"
            name="firstname"
            type="text"
            onChange={handleChange}
            value={customer.firstname}
          />
          <br />
          <label htmlFor="fisrtname">lastname</label>
          <br />
          <input
            id="lastname"
            name="lastname"
            type="text"
            onChange={handleChange}
            value={customer.lastname}
          />
          <br />
          <label htmlFor="email">Model</label>
          <br />
          <input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            value={customer.email}
          />
          <br />
          <label htmlFor="phone">phone</label>
          <br />
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={handleChange}
            value={customer.phone}
          />
          <br />
          <label htmlFor="postcode">postcode</label>
          <br />
          <input
            id="postcode"
            name="postcode"
            type="text"
            onChange={handleChange}
            value={customer.postcode}
          />
          <br />
          <label htmlFor="streetaddress">streetaddress</label>
          <br />
          <input
            id="streetaddress"
            name="streetaddress"
            type="text"
            onChange={handleChange}
            value={customer.streetaddress}
          />

          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </Popup>
    </div>
  );
}
