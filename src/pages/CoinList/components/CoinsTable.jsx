import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy } from "react-table";
import { useCoinsListContext } from "../utils/context";

export default function CoinsTable() {
  const { marketData,handleRowClick } = useCoinsListContext();

  const columns = React.useMemo(
    () => [
      {
        Header: "Asset",
        accessor: "image",
        Cell: ({ value, row: { original }, ...rest }) => {
          return (
            <Box maxW="32px">
              <Image w="100%" h="100%" src={value} />
            </Box>
          );
        },
      },
      {
        Header: "Symbol",
        accessor: "symbol",
        Cell: ({ value, row: { original }, ...rest }) => {
          return <Text textTransform="uppercase">{value}</Text>;
        },
      },
      {
        Header: "Current Price",
        accessor: "current_price",
      },
      {
        Header: "High 24H",
        accessor: "high_24h",
      },
      {
        Header: "Low 24H",
        accessor: "low_24h",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: marketData }, useSortBy);

  return (
    <Table borderRadius="8px" bgColor="#fff" maxW="50%" {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr
            borderBottom="1px solid #ccc"
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <Th
                py="1.2rem"
                border="none"
                color="#000"
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, idx) => {
          prepareRow(row);
          return (
            <Tr
              cursor="pointer"
              _hover={{ bgColor: "rgba(45, 43, 196,0.4)" }}
              borderBottom={idx !== rows.length - 1 && "1px solid #ccc"}
              {...row.getRowProps()}
              onClick={() => handleRowClick(row?.original?.id)}
            >
              {row.cells.map((cell) => (
                <Td border="none" color="#000" {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
