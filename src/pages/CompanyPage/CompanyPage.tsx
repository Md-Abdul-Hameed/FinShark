import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../../company";
import { getCompanyProfile } from "../../api";
import SideBar from "../../components/SideBar/SideBar";
import CompanyDashboard from "../../components/CompanyDashboard/CompanyDashboard";
import Tile from "../../components/Tile/Tile";
import Spinner from "../../components/Spinner/Spinner";

type Props = {};

const CompanyPage = (props: Props) => {
  let { ticker } = useParams<string>();
  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getCompanyProfileInit = async () => {
      const result = await getCompanyProfile(ticker);
      setCompany(result?.data[0]);
    };
    getCompanyProfileInit();
  }, []);

  return company ? (
    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
      <SideBar></SideBar>

      <CompanyDashboard ticker={ticker!}>
        <Tile title="Company Name" data={company.companyName}></Tile>
        <Tile title="Price" data={company.price.toString()}></Tile>
        <Tile title="Sector" data={company.sector}></Tile>
        <Tile title="DCF" data={company.dcf.toString()}></Tile>
        <p className="bf-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4">
          {company.description}
        </p>
      </CompanyDashboard>
    </div>
  ) : (
    <Spinner />
  );
};

export default CompanyPage;
