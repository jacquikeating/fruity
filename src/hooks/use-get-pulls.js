import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default function useGetPulls(sessionNum) {
  let endpoint = "/pulls";
  let key = "pulls";

  if (sessionNum) {
    endpoint = `/sessions/${sessionNum}/pulls`;
    key = `session-${sessionNum}-pulls`;
  }

  const getPulls = async () => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const { data, isPending } = useQuery({
    queryKey: [key],
    queryFn: getPulls,
  });

  return { pullsData: data, isPending };
}
