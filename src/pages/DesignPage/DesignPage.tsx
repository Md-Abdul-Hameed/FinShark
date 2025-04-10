import React from "react";
import Table from "../../components/Table/Table";
import RatioList from "../../components/RatioList/RatioList";
import { testIncomeStatementData } from "../../components/Table/testdata";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>Finshark Design Page</h1>
      <h2>This is Finshark's design page</h2>
      <RatioList
        data={testIncomeStatementData}
        config={tableConfig}
      ></RatioList>
      {/* <Table></Table> */}
    </>
  );
};

export default DesignPage;
