import { SimpleGrid, Text } from "@chakra-ui/react";
import useEvents from "../hooks/useEvents";
import EventCard from "./EventCard";

const EventGrid = () => {
  const { musicevents, error } = useEvents();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={10}
      >
        {musicevents.map((musicevent) => (
          <EventCard key={musicevent.id} musicEvent={musicevent} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default EventGrid;
