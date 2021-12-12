import React from "react";
import trainingServcice from "./services/training";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function TrainingStats(props) {  

  const { trainings } = props;

  return (
    <div>
      <BarChart width={1300} height={400} data={trainings}>
        <XAxis dataKey="activity" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          name="Duration (min)"
          dataKey="duration"
          fill="#8884d8"
          barSize={30}
        />
      </BarChart>
    </div>
  );
}
