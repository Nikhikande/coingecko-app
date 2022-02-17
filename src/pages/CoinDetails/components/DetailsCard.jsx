import { Box, chakra, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useCoinDetailsContext } from "../utils/context";

export default function DetailsCard() {
  const { coinData: data } = useCoinDetailsContext();
  return (
    <Box p="24px 47px" borderRadius="8px" bgColor="#f2f2f2" w="80%" maxW="90%">
      <Flex>
        <Flex w="30%" mr={4} direction="column">
          <Box mb={4} maxW="224px">
            <Image w="100%" src={data?.image?.large} />
          </Box>
          <Box border="1px solid #ccc" />
          <Box px="2" mt={4}>
            <Text fontSize="18px">
              <chakra.span mr={4} fontWeight="bold">
                Name
              </chakra.span>{" "}
              {data?.name}
            </Text>
            <Text fontSize="18px">
              <chakra.span mr={4} fontWeight="bold">
                Symbol
              </chakra.span>{" "}
              {data?.symbol}
            </Text>
            <Text fontSize="18px">
              <chakra.span mr={4} fontWeight="bold">
                Hashing Algorithm
              </chakra.span>{" "}
              {data?.hashing_algorithm}
            </Text>
            <Text fontSize="18px">
              <chakra.span mr={4} fontWeight="bold">
                Market Capital
              </chakra.span>{" "}
              {data?.market_data.current_price["eur"]}
            </Text>
            <Text fontSize="18px">
              <chakra.span mr={4} fontWeight="bold">
                Homepage
              </chakra.span>{" "}
              {data?.links.homepage[0]}
            </Text>
            <Text fontSize="18px">
              <chakra.span mr={4} fontWeight="bold">
                Genesis Date
              </chakra.span>{" "}
              {data?.genesis_date}
            </Text>
          </Box>
        </Flex>
        <Flex py={4} px="24px" direction="column" w="70%">
          <Text fontSize="2rem">Description</Text>
          <Box
            mt={4}
            w="100%"
            dangerouslySetInnerHTML={{ __html: data?.description?.en || "<h2>No Description</h2>"}}
          ></Box>
        </Flex>
      </Flex>
    </Box>
  );
}
