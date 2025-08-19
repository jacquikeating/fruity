import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = API_URL;

// Working! Original version
// export default function useFetch(url) {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         setLoading(false);
//         setData(data);
//       });
//   }, [url]);

//   return { loading, data };
// }

// Axios version
export function useAxiosGet(endpoint) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/${endpoint}`);
        setData(response.data);
        // console.log("api called!");
        // console.log(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [endpoint]);

  return { data, error, loading };
}

export const useAxios = (
  { url, method, body = null, headers = null },
  runOnMount = false
) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const callAPI = () => {
    // console.log(url, method, body, headers, runOnMount);
    setLoading(true);
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (runOnMount) {
      callAPI();
    }
  }, [url, method, body, headers, runOnMount]);

  return { response, error, loading, callAPI };
};
// GET sessions and pulls
// export function useAxiosGetAll(url1, url2) {
//   const [sessions, setSessions] = useState([]);
//   const [pulls, setPulls] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async function () {
//       try {
//         const response = await axios.get(url1);
//         setSessions(response.data.reverse());
//       } catch (err) {
//         setError(err);
//       } finally {
//         getPullsData();
//       }
//     })();

//     async function getPullsData() {
//       try {
//         const response = await axios.get(url2);
//         setPulls(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//   }, [url1, url2]);

//   return { sessions, pulls, error, loading };
// }

// example: https://wis-fruity-1ed9bfddc2af.herokuapp.com/sessions/44
