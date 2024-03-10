import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface MusicEvent {
  id: number;
  name: string;
  artist: string;
}

const EventGrid = () => {
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
    apiClient
      .get("/events")
      .then((res) => {
        setMusicEvent(res.data);
        console.log(res);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {musicevents.map((musicevent) => (
          <li key={musicevent.id}>{musicevent.artist}</li>
        ))}
      </ul>
    </>
  );
};

export default EventGrid;
