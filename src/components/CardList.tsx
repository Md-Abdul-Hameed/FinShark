import React from "react";
import Card from "./Card/Card";
import { CompanySearch } from "../../company";

interface Props {
  searchResults: CompanySearch[];
  handleSetPortfolio: (e: string) => void;
}

const CardList = ({ searchResults, handleSetPortfolio }: Props) => {
  return (
    <div>
      {searchResults.length === 0 ? (
          <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      ) : (
        searchResults.map((result) => (
          <Card
            companyName={result.name}
            ticker={result.symbol}
            currency={result.currency}
            exchangeShortName={result.exchangeShortName}
            stockExchange={result.stockExchange}
            key={result.symbol}
            handleSetPortfolio={handleSetPortfolio}
          ></Card>
        ))
      )}
    </div>
  );
};

export default CardList;
