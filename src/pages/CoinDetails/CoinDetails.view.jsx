import { Flex } from "@chakra-ui/react";
import React from "react";
import DetailsCard from "./components/DetailsCard";

export default function CoinDetailsView() {
  return (
    <>
      <Flex justifyContent="center" mt={4}  w="100%">
        <DetailsCard />
      </Flex>
    </>
  );
}
