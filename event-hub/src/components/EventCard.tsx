import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { MusicEvent } from "../hooks/useEvents";

interface Props {
  musicEvent: MusicEvent;
}

const EventCard = ({ musicEvent }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image fallbackSrc="vite.svg" />
      <CardBody>
        <Heading fontSize="2xl">
          {musicEvent.name} - {musicEvent.artist}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default EventCard;
