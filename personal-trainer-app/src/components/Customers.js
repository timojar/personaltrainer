import React from "react";
import { parseJSON } from "date-fns";
import { format } from "date-fns";

export default function Customers(props) {
  const { customers } = props;
  console.log(customers);

  return (
    <div id="customers">
      <input
        placeholder="Search...."
        type="text"
        name="seacrh"
        onChange={props.searchCustomersBy}
      />

      <table>
        <tbody>
          <tr>
            <th>
              <a
                onClick={() => {
                  const buttCol = 1;
                  props.sortCust(buttCol);
                }}
              >
                firstname
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 2;
                  props.sortCust(buttCol);
                }}
              >
                lastname
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 3;
                  props.sortCust(buttCol);
                }}
              >
                email
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 4;
                  props.sortCust(buttCol);
                }}
              >
                phone
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 5;
                  props.sortCust(buttCol);
                }}
              >
                postcode
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 6;
                  props.sortCust(buttCol);
                }}
              >
                streetaddress
              </a>
            </th>
          </tr>
          {customers.map((c, index) => (
            <tr key={index}>
              <td>{c.firstname}</td>
              <td>{c.lastname}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.postcode}</td>
              <td>{c.streetaddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
