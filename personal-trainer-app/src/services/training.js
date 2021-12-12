import axios from "axios";

const getTrainings= async () => {
  try {
    const ret = await axios.get(`https://customerrest.herokuapp.com/api/trainings`);
    console.log(ret.data.content)
    return ret.data.content;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const deleteTraining= async (props) => {
  

  try {
    const res = await axios.delete(props);  
    console.log(res);
    window.location.reload(false)
    
  } catch (e) {
    console.log(e);
    throw e;
  }

}

export default {
    getTrainings, deleteTraining
};