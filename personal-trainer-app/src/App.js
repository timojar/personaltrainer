import "./App.css";
import trainingServcice from "./services/training";
import TrainingStats from "./TrainingStats";
import Trainings from "./components/Trainings";
import React from "react";

function App() {
  const [trainings, setTrainings] = React.useState([]);

  React.useEffect(() => {
    trainingServcice.getTrainings().then(setTrainings);
    console.log(trainings);
  }, []);

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
  };

  return (
    <div className="App">
      <Trainings sortBy={sortBy} trainings={trainings} />
    </div>
  );
}

export default App;
