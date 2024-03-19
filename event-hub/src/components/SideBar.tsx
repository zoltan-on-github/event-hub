import { Button, VStack } from "@chakra-ui/react";
import useEvents from "../hooks/useEvents";

interface Props {
  onSelectArtist: (artist: string) => void;
}

const SideBar = ({ onSelectArtist }: Props) => {
  const { artists } = useEvents(null);
  let artist_array = Array.from(artists);
  artist_array.sort((a, b) => a.localeCompare(b));

  return (
    <VStack align="left" paddingTop="50px" paddingLeft="10px">
      {artist_array.map((artist, index) => (
        <Button
          onClick={() => onSelectArtist(artist)}
          as="b"
          variant="link"
          key={index}
        >
          {artist}
        </Button>
      ))}
    </VStack>
  );
};

export default SideBar;
