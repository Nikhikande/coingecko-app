import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { useFetcher } from "../../hooks/useFetcher";
import { getCoinDetails } from "../../utils/services";
import CoinDetailsView from "./CoinDetails.view";
import { CoinDetailsContext } from "./utils/context";

export default function CoinDetailsContainer() {
  const { id } = useParams();
  const fetchCoinDetails = React.useCallback(()=>getCoinDetails(id),[id])
  const [data, loading, error] = useFetcher(fetchCoinDetails);
  if (loading) {
    return (
      <>
        <Layout title={`${id} Details`}>
          <Flex flex="1" justify="center" align="center">
            <Spinner color="#fff" size="xl" />
          </Flex>
        </Layout>
      </>
    );
  }
  return (
    <>
      <Layout title={`${id} Details`}>
        <CoinDetailsContext.Provider value={{ coinData: data }}>
          <CoinDetailsView />
        </CoinDetailsContext.Provider>
      </Layout>
    </>
  );
}
