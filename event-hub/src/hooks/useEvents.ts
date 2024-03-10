import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

// export it , so it can be used in the EventCard component for example
export interface MusicEvent {
    id: number;
    name: string;
    artist: string;
    date: string;
    city: string;
  }

const useEvents = () => {
    const [musicevents, setMusicEvent] = useState<MusicEvent[]>([]);
    const [error, setError] = useState([]);

    // Fetch data:
    //useEffect(() => {
    //  fetch("http://localhost:3000/events")
    //    .then((response) => response.json())
    //    .then((json) => console.log(json));
    //});


    //this usEffect runs only once when the component mounts
    useEffect(() => {
      const controller = new AbortController();

      apiClient
        .get("/events", {signal: controller.signal})
        .then((res) => {
          setMusicEvent(res.data);
          //console.log(res);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        });

      return () => controller.abort()
    }, []);

    return {musicevents, error}

}

export default useEvents