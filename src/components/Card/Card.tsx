import React from "react";
import "./card.css";
import AddPortfolio from "../Portfolio/AddPortfolio";
import { Link } from "react-router-dom";

interface Props {
  companyName: String;
  ticker: string;
  currency: string;
  exchangeShortName: string;
  stockExchange: string;
  handleSetPortfolio: (e: string) => void;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  currency,
  handleSetPortfolio,
  stockExchange,
  exchangeShortName,
}: Props): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row">
      <Link
        to={`/company/${ticker}/company-profile`}
        className="font-bold text-center text-black md:text-left"
      >
        {companyName} ({ticker})
      </Link>
      <p className="text-black">{currency}</p>
      <p className="font-bold text-black">
        {exchangeShortName} - {stockExchange}{" "}
      </p>

      <AddPortfolio
        handleSetPortfolio={handleSetPortfolio}
        symbol={ticker}
      ></AddPortfolio>
    </div>
  );
};

export default Card;
