import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default function useGetPulls(sessionNum) {
  const endpoint = `/pulls/${sessionNum}` || `/pulls`;
  const key = `session-${sessionNum}-pulls` || `pulls`;

  console.log(`Endpoint: ${endpoint}`);
  console.log(`Key: ${key}`);

  const getPulls = async () => {
    try {
      const response = await axiosInstance.get(endpoint);
      console.log(response.data);
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

  return { sessionsData: data, isPending };
}
