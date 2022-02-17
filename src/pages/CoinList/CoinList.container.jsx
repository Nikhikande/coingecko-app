import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import { useFetcher } from "../../hooks/useFetcher";
import { getMarketsData } from "../../utils/services";
import CoinListView from "./CoinList.view";
import { CoinsListContext } from "./utils/context";

export default function CoinListContainer() {
  const [data, loading, error] = useFetcher(getMarketsData);
  const history = useHistory();
  const handleRowClick = (id) => {
    //
    history.push(`/${id}`);
  };
  
  if (loading) {
    return (
      <>
        <Layout title="CoinGecko Market Data">
          <Flex flex="1" justify="center" align="center">
            <Spinner color="#fff" size="xl" />
          </Flex>
        </Layout>
      </>
    );
  }
  return (
    <>
      <Layout title="CoinGecko Market Data">
        <CoinsListContext.Provider
          value={{ marketData: data ? data : [], loading, handleRowClick }}
        >
          <CoinListView />
        </CoinsListContext.Provider>
      </Layout>
    </>
  );
}
