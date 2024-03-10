import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/noun-dj-3181685.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Box>
        <Image src={logo} boxSize="60px" />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
