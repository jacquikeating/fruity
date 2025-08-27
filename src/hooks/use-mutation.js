import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default function useMutatePull(pull) {
  async function updatePull(pull) {
    delete pull.index;
    let pullToUpdate = { ...pull };
    console.log(pull);
    try {
      await axios.put(`${API_URL}/pulls/${pullToUpdate.id}`, pullToUpdate);
    } catch (error) {
      console.error(error);
    }
  }

  const useMutatePull = useMutation({
    mutationFn: () => {
      updatePull(pull);
    },
  });
}
