import { SimpleGrid, Text } from "@chakra-ui/react";
import useEvents, { MusicEvent } from "../hooks/useEvents";
import EventCard from "./EventCard";
import EventCardContainer from "./EventCardContainer";
import EventCardSkeleton from "./EventCardSkeleton";

const EventGrid = () => {
  const { musicevents, error, isLoading } = useEvents();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <EventCardContainer key={skeleton}>
              <EventCardSkeleton key={skeleton} />
            </EventCardContainer>
          ))}
        {musicevents.map((musicevent: MusicEvent) => (
          <EventCardContainer key={musicevent.id}>
            <EventCard key={musicevent.id} musicEvent={musicevent} />
          </EventCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default EventGrid;
