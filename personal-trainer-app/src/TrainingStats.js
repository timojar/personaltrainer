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

export default function TrainingStats() {
  const [trainings, setTrainings] = React.useState([]);

  React.useEffect(() => {
    trainingServcice.getTrainings().then(setTrainings);
    console.log(trainings);
  }, []);

  return (
    <div>
      <BarChart width={600} height={300} data={trainings}>
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
