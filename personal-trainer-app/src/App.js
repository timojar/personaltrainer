import "./App.css";
import trainingServcice from "./services/training";
import TrainingStats from "./TrainingStats";
import Trainings from "./components/Trainings";
import React from "react";
import { parseJSON } from "date-fns";

function App() {
  const [trainings, setTrainings] = React.useState([]);
  const [allTrainings, setAllTrainings] = React.useState([]);

  React.useEffect(() => {
    trainingServcice.getTrainings().then(setTrainings);
    trainingServcice.getTrainings().then(setAllTrainings);
    console.log(trainings);
  }, []);

  const searchByActivity =(event) =>{
    
    const searchStr =event.target.value;
    console.log(event.nativeEvent.inputType)
    
    if(searchStr !== ''){
    const toFilter = [...trainings];
    const filtered = toFilter.filter((t) =>t.activity.toLowerCase().includes(searchStr.toLowerCase()))   
  
      setTrainings(filtered)
    }
    else{
      setTrainings(allTrainings)
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
      const sorted = toSort.sort((a, b) => parseJSON(a.date) - parseJSON(b.date));
      console.log(sorted);
      setTrainings(sorted);

    }
  };

  return (
    <div className="App">
      <Trainings searchByActivity={searchByActivity} sortBy={sortBy} trainings={trainings} />
    </div>
  );
}

export default App;
