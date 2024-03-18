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
    img_url: string;
  }

const artists: Set<string> = new Set<string>();

function collect_artists(musicevents: MusicEvent[])
{
  console.log('collect_artists function called')
  musicevents.forEach(musicevent => {
    artists.add(musicevent.artist)
  });
}

const useEvents = () => {
    const [musicevents, setMusicEvent] = useState<MusicEvent[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(false) ;

    // Fetch data:
    //useEffect(() => {
    //  fetch("http://localhost:3000/events")
    //    .then((response) => response.json())
    //    .then((json) => console.log(json));
    //});


    //this usEffect runs only once when the component mounts
    useEffect(() => {
      const controller = new AbortController();

      setLoading (true);
      apiClient
        .get("/events", {signal: controller.signal})
        .then((res) => {
          setMusicEvent(res.data);
          //console.log(res);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        })
        .finally(() => {setLoading(false)});

      return () => controller.abort()
    }, []);

    collect_artists(musicevents)
    return {musicevents, error, isLoading, artists}

}

export default useEvents