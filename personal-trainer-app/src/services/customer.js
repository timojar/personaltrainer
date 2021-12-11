import axios from "axios";

const getCustomers= async () => {
  try {
    const ret = await axios.get(`https://customerrest.herokuapp.com/api/customers`);
    console.log(ret.data.content)
    return ret.data.content;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default {
    getCustomers
};