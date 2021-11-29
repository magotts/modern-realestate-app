import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
     "x-rapidapi-host": "bayut.p.rapidapi.com",
     "x-rapidapi-key": "f7e469fab9mshd325e0eb7cb33fdp1cbda8jsn458e06bbfbfe",
    }
  });

  return data;
}