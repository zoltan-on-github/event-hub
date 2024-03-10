import { Text } from "@chakra-ui/react";
import useEvents from "../hooks/useEvents";

const EventGrid = () => {
  const { musicevents, error } = useEvents();
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
