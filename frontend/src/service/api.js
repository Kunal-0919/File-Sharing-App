import axios from "axios";

const BACKEND_API_URL = "http://localhost:8000";

export const uploadFile = async (data) => {
  try {
    const res = await axios.post(`${BACKEND_API_URL}/upload`, data);
    return res.data;
  } catch (error) {
    console.log("error while calling the uploadFile:", error.message);
  }
};
