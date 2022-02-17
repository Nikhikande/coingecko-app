import { Flex } from "@chakra-ui/react";
import React from "react";
import CoinsTable from "./components/CoinsTable.jsx";

export default function CoinListView() {
  return (
    <>
      <Flex py="2rem" justifyContent="center" w="100%">
        <CoinsTable />
      </Flex>
    </>
  );
}
