import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default function useGetSessions() {
  const getSessions = async () => {
    try {
      const response = await axiosInstance.get("/sessions");
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const { data, isPending } = useQuery({
    queryKey: ["sessions"],
    queryFn: getSessions,
  });

  return { sessionsData: data, isPending };
}
