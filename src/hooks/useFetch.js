import { useState, useEffect } from "react";
import axios from "axios";

// Working! Original version
export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, [url]);

  return { loading, data };
}

// Axios version
export function useAxiosGet(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        console.log("api called!");
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}

export function useAxiosGetAll(url1, url2) {
  const [sessions, setSessions] = useState([]);
  const [pulls, setPulls] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(url1);
        setSessions(response.data.reverse());
      } catch (err) {
        setError(err);
      } finally {
        getPullsData();
      }
    })();

    async function getPullsData() {
      try {
        const response = await axios.get(url2);
        setPulls(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
  }, [url1, url2]);

  return { sessions, pulls, error, loading };
}

// example: https://wis-fruity-1ed9bfddc2af.herokuapp.com/sessions/44
