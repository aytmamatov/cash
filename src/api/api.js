import axios from "axios";

export const instance = axios.create({
  baseURL: "https://fundraising-d9bc9-default-rtdb.firebaseio.com/",
});
