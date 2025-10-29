import axios from "axios";

export const veeniuApi = axios.create({
  baseURL: process.env.VEENIU_API,
});
