import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface eventLocation {
    country: string;
    cities: string[]
}

const useLocations = () => {
    const [locations, setLocation] = useState<eventLocation[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(false) ;

    useEffect(() => {
      const controller = new AbortController();

      setLoading (true);

      apiClient
        .get("/locations", {signal: controller.signal })
        .then((res) => {
            setLocation(res.data);
          //console.log(res);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        })
        .finally(() => {setLoading(false)});

      return () => controller.abort()
    }, []);

    return {locations, error, isLoading}

}

export default useLocations