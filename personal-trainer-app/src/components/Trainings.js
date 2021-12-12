import React from "react";
import { parseJSON } from "date-fns";
import { format } from "date-fns";
import TrainingForm from "../components/TrainingForm";
import DeleteTraining from "../components/deleteTraining";

export default function Trainings(props) {
  const { trainings } = props;
  const { customers } =props;
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
    <div id="trainings">

      <br/>
      <br/>
      <br/>
      <br/>

      <TrainingForm customers={customers} />
      
      <input placeholder="Search...." type="text" name="seacrh" onChange={props.searchByActivity} />
      <table >
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
              <td><DeleteTraining url={t.links[1].href}/></td>
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
