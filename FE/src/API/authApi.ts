import axios from "axios";

const url = "https://growgrade.onrender.com/api/v1";

export const createSchoolAccount = async (data: any) => {
  try {
    return await axios.post(`${url}/register-account`, data);
  } catch (error) {
    console.log(error);
  }
};

export const verifySchoolAccount = async (data: any) => {
  try {
    return await axios.patch(`${url}/verify-account`, data);
  } catch (error) {
    console.log(error);
  }
};

export const loginSchoolAccount = async (data: any) => {
  try {
    return await axios.post(`${url}/login-account`, data);
  } catch (error) {
    console.log(error);
  }
};

export const resetSchoolPassword = async (data: any) => {
  try {
    return await axios.patch(`${url}/reset-password`, data);
  } catch (error) {
    console.log(error);
  }
};

export const changeSchoolPassword = async (userID: any, data: any) => {
  try {
    return await axios.patch(`${url}/change-password/${userID}`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getUrl = async () => {
  try {
    return await axios.get(`https://growgrade.onrender.com/`);
  } catch (error) {
    console.log(error);
  }
};
