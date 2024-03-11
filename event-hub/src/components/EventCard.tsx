import {
  Badge,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  StackDivider,
} from "@chakra-ui/react";
import { MusicEvent } from "../hooks/useEvents";

interface Props {
  musicEvent: MusicEvent;
}

const EventCard = ({ musicEvent }: Props) => {
  return (
    <Card>
      <Image fallbackSrc="vite.svg" />
      <CardBody>
        <Heading fontSize="2xl">
          {musicEvent.name} - {musicEvent.artist}
        </Heading>
        <HStack
          padding="10px"
          justifyContent={"flex-end"}
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Badge>{musicEvent.city}</Badge>
          <Badge>{musicEvent.date}</Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default EventCard;
