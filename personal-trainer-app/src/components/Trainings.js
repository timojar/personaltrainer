import React from "react";

export default function Trainings(props) {
  const { trainings } = props;
  console.log(trainings);

  return (
    <div>
      <table>
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
          </tr>
          {trainings.map((t, index) => (
            <tr key={index}>
              <td>{t.activity}</td>
              <td>{t.duration}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
