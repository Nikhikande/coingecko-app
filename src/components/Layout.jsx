import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Layout({ title = "default", children }) {
  return (
    <Flex
      overflowX="hidden"
      bg="linear-gradient(to right, #0f0c29, #302b63, #24243e)"
      minH="100vh"
      direction="column"
    >
      <Flex py="2rem" justifyContent="center" w="100%" minH="118px">
        <Text textTransform="capitalize" color="#f2f2f2" fontSize="2.5rem">
          {title}
        </Text>
      </Flex>
      {children}
    </Flex>
  );
}
