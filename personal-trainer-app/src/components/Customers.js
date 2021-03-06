import React from "react";
import CustomerEditForm from "../components/CustomerEditForm";
import CustomerForm from "../components/CustomerForm";
import DeleteCustomer from "../components/deleteCustomer";


export default function Customers(props) {
  const { customers } = props;
  const { trainings } = props;
  console.log(customers);

  

  return (
    <div id="customers">
      <input
        placeholder="Search...."
        type="text"
        name="seacrh"
        onChange={props.searchCustomersBy}
      />

<CustomerForm />

      <table>
        <tbody>
          <tr></tr>
          <tr>
            <th>
              <a
                onClick={() => {
                  const buttCol = 1;
                  props.sortCust(buttCol);
                }}
              >
                (sort)
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 2;
                  props.sortCust(buttCol);
                }}
              >
                (sort)
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 3;
                  props.sortCust(buttCol);
                }}
              >
                (sort)
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 4;
                  props.sortCust(buttCol);
                }}
              >
                (sort)
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 5;
                  props.sortCust(buttCol);
                }}
              >
                (sort)
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 6;
                  props.sortCust(buttCol);
                }}
              >
                (sort)
              </a>
            </th>
          </tr>
          <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>phone</th>
            <th>postcode</th>
            <th>streetaddress</th>
          </tr>
          {customers.map((c, index) => (
            <tr key={index}>
              <td>{c.firstname}</td>
              <td>{c.lastname}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.postcode}</td>
              <td>{c.streetaddress}</td>              
              <td><DeleteCustomer url={c.links[1].href} /> </td>
              <td><CustomerEditForm trainings={trainings} customer={c} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
