import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/noun-dj-3181685.svg";

const NavBar = () => {
  return (
    <HStack>
      <Box bg="blue.200 ">
        <Image src={logo} boxSize="60px" />
      </Box>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
