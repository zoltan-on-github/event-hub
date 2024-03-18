import { Text, VStack } from "@chakra-ui/react";
import useEvents from "../hooks/useEvents";

const SideBar = () => {
  const { artists } = useEvents();

  return (
    <VStack align="left" paddingTop="50px" paddingLeft="10px">
      {Array.from(artists).map((artist, index) => (
        <Text as="b" align="left" key={index}>
          {artist}
        </Text>
      ))}
    </VStack>
  );
};

export default SideBar;
