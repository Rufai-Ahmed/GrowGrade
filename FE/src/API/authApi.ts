import axios from "axios";

const url = "http";

export const createSchoolAccount = async (data: any) => {
  try {
    return await axios.post(url, data);
  } catch (error) {
    console.log(error);
  }
};
