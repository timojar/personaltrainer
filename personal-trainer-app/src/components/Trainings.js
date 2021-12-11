import React from "react";
import { parseJSON } from "date-fns";
import { format } from "date-fns";

export default function Trainings(props) {
  const { trainings } = props;
  console.log(trainings);

  const parseTrainingDate = (sTRDate) => {
    let viewAbleDate = "";
    try {
      const tDate = parseJSON(sTRDate);
      viewAbleDate = format(tDate, "MM/dd/yyyy");
    } catch {
      console.error();
      viewAbleDate = "";
    }
    return viewAbleDate;
  };

  return (
    <div>
      <table id="trainings">
        <tbody>
          <tr>
            <th>
              <a
                onClick={() => {
                  const buttCol = 1;
                  props.sortBy(buttCol);
                }}
              >
                Activity
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 2;
                  props.sortBy(buttCol);
                }}
              >
                Duration
              </a>
            </th>
            <th>
              <a
                onClick={() => {
                  const buttCol = 3;
                  props.sortBy(buttCol);
                }}
              >
                Date
              </a>
            </th>
          </tr>
          {trainings.map((t, index) => (
            <tr key={index}>
              <td>{t.activity}</td>
              <td>{t.duration}</td>
              <td>{parseTrainingDate(t.date)}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
