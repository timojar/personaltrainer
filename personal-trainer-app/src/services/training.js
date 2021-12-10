import React from "react";

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

export default {
    getTrainings
};