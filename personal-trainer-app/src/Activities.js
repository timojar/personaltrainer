import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const activities = [
  { activity: { desc: "Spinning", minutes: 45 } },
  { activity: { desc: "Fitness", minutes: 120 } },
  { activity: { desc: "Gym Training", minutes: 60 } },
  { activity: { desc: "Zumba", minutes: 60 } },
  { activity: { desc: "Jogging", minutes: 60 } },
];

export default function Activities() {
  return (
    <div>  
  <BarChart width={600} height={300} data={activities}>
    <XAxis dataKey="activity.desc" stroke="#8884d8" />
    <YAxis/>   
    <Tooltip/>
      <Legend verticalAlign="top" height={36}/>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar name="Duration (min)"  dataKey="activity.minutes" fill="#8884d8" barSize={30} />
  </BarChart>
 
    </div>
  );
}
