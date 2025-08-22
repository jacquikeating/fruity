import { useQuery } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

export default function useGetSessions() {
  const getSessions = async () => {
    const response = await fetch(`${API_URL}/sessions`);
    return response.json();
  };

  const { data, isPending } = useQuery({
    queryKey: ["sessions"],
    queryFn: getSessions,
  });

  return { sessionsData: data, isPending };
}
