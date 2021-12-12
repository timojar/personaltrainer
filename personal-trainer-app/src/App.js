import "./App.css";
import trainingServcice from "./services/training";
import customerService from "./services/customer";
import TrainingStats from "./TrainingStats";
import NotFound from "./NotFound";
import Customers from "./components/Customers";
import Trainings from "./components/Trainings";
import CustomerForm from "./components/CustomerForm";
import React from "react";
import { parseJSON } from "date-fns";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [trainings, setTrainings] = React.useState([]);
  const [allTrainings, setAllTrainings] = React.useState([]);
  const [customers, setCustomers] = React.useState([]);
  const [allcustomers, setAllCustomers] = React.useState([]);

  React.useEffect(() => {
    trainingServcice.getTrainings().then(setTrainings);
    trainingServcice.getTrainings().then(setAllTrainings);
    customerService.getCustomers().then(setCustomers);
    customerService.getCustomers().then(setAllCustomers);
    console.log(trainings);
  }, []);

  const searchCustomersBy = (event) => {
    const searchCustStr = event.target.value;
    if (searchCustStr !== "") {
      const toFilter = [...customers];
      const filtered = toFilter.filter((c) => 
        (c.firstname + c.lastname+c.email+c.phone+c.postcode+c.streetaddress).toLowerCase().includes(searchCustStr.toLowerCase())
      );
      setCustomers(filtered);
    }
    else {
      setCustomers(allcustomers);
    }
  };

  const searchByActivity = (event) => {
    const searchStr = event.target.value;
    console.log(event.nativeEvent.inputType);

    if (searchStr !== "") {
      const toFilter = [...trainings];
      const filtered = toFilter.filter((t) =>
        t.activity.toLowerCase().includes(searchStr.toLowerCase())
      );

      setTrainings(filtered);
    } else {
      setTrainings(allTrainings);
    }
  };

  const sortCust = (butt) =>{
    const toSort = [...customers];
    console.log(butt)
    if (butt == 1) {
      const sorted = toSort.sort((a, b) =>
      a.firstname.localeCompare(b.firstname)
    );
    setCustomers(sorted);
    }
    if (butt == 2) {
      const sorted = toSort.sort((a, b) =>
      a.lastname.localeCompare(b.lastname)
    );
    setCustomers(sorted);
    }
    if (butt == 3) {
      const sorted = toSort.sort((a, b) =>
      a.email.localeCompare(b.email)
    );
    setCustomers(sorted);

    }
    if (butt == 4) {
      const sorted = toSort.sort((a, b) =>
      a.phone.localeCompare(b.phone)
    );
    setCustomers(sorted);      
    }
    if (butt == 5) {
      const sorted = toSort.sort((a, b) =>
      a.postcode	.localeCompare(b.postcode	)
    );
    setCustomers(sorted); 
      
    }
    if (butt == 6) {
      const sorted = toSort.sort((a, b) =>
      a.streetaddress.localeCompare(b.streetaddress)
    );
    setCustomers(sorted);
      
    }

  }

  const sortBy = (butt) => {
    console.log("click" + butt);
    if (butt == 1) {
      const toSort = [...trainings];
      const sorted = toSort.sort((a, b) =>
        a.activity.localeCompare(b.activity)
      );
      console.log(sorted);
      setTrainings(sorted);
    }
    if (butt == 2) {
      const toSort = [...trainings];
      const sorted = toSort.sort((a, b) => a.duration - b.duration);
      console.log(sorted);
      setTrainings(sorted);
    }

    if (butt == 3) {
      const toSort = [...trainings];
      const sorted = toSort.sort(
        (a, b) => parseJSON(a.date) - parseJSON(b.date)
      );
      console.log(sorted);
      setTrainings(sorted);
    }
  };

  return (
    <div className="App">
      <Router>
        <Link to="/"> Activities </Link> <Link to="/stats">Statistics</Link>{" "}
        <Link to="/customers">Customers</Link>{" "}
        <Link to="/createcustomer">Add customer</Link>{" "}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Trainings
                searchByActivity={searchByActivity}
                sortBy={sortBy}
                trainings={trainings}
              />
            }
          />
          <Route
            path="/stats"
            element={<TrainingStats trainings={allTrainings} />}
          />
          <Route
            path="/customers"
            element={
              <Customers
                searchCustomersBy={searchCustomersBy}
                customers={customers}
                sortCust={sortCust}
              />
            }
          />
          <Route path="/createcustomer" element={<CustomerForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
