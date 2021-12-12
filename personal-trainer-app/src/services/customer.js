import axios from "axios";
import React from "react";



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

const deleteCustomer= async (props) => {
  

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
    getCustomers, deleteCustomer
};