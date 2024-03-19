import { Text, VStack } from "@chakra-ui/react";
import useEvents from "../hooks/useEvents";

const SideBar = () => {
  const { artists } = useEvents();
  let artist_array = Array.from(artists);
  artist_array.sort((a, b) => a.localeCompare(b));

  return (
    <VStack align="left" paddingTop="50px" paddingLeft="10px">
      {artist_array.map((artist, index) => (
        <Text as="b" align="left" key={index}>
          {artist}
        </Text>
      ))}
    </VStack>
  );
};

export default SideBar;
