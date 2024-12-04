import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search";
import ListPorfolio from "../../components/Portfolio/ListPorfolio";
import CardList from "../../components/CardList";
import { searchForCompanies } from "../../api";
import { CompanySearch } from "../../../company";

type Props = {};

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolio, setPortfolio] = useState<string[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const deletePortfolio = (symbol: string) => {
    setPortfolio(portfolio.filter((s) => s !== symbol));
  };

  const handleSetPortfolio = (symbol: string) => {
    if (!portfolio.includes(symbol)) setPortfolio([...portfolio, symbol]);
  };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setServerError("");
    const result = await searchForCompanies(search);
    if (typeof result === "string") setServerError(result);
    else if (Array.isArray(result.data)) {
      setSearchResults(result.data);
      setSearch("");
    }
  };
  return (
    <div>
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
        onSubmit={onSubmit}
      ></Search>
      {serverError && <h1>{serverError}</h1>}
      <ListPorfolio
        portfolio={portfolio}
        deletePortfolio={deletePortfolio}
      ></ListPorfolio>
      <CardList
        searchResults={searchResults}
        handleSetPortfolio={handleSetPortfolio}
      ></CardList>
    </div>
  );
};

export default SearchPage;
