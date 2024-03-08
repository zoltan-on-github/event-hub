import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/noun-dj-3181685.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
