import axios from "axios";

const url = "https://growgrade.onrender.com/api/v1";

export const createSchoolAccount = async (data: any) => {
  try {
    return await axios.post(`${url}/createAccount`, data);
  } catch (error) {
    console.log(error);
  }
};

export const verifySchoolAccount = async (data: any) => {
  try {
    return await axios.patch(`${url}/verifyAccount`, data);
  } catch (error) {
    console.log(error);
  }
};

export const loginSchoolAccount = async (data: any) => {
  try {
    return await axios.post(`${url}/verifyAccount`, data);
  } catch (error) {
    console.log(error);
  }
};
