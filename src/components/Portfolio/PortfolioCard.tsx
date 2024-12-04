import React from "react";
import { Link } from "react-router-dom";

type Props = { symbol: string; deletePortfolio: (e: string) => void };

const PortfolioCard = ({ symbol, deletePortfolio }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/company/${symbol}/company-profile`}
        className="pt-6 text-xl font-bold"
      >
        {symbol}
      </Link>
      <button
        onClick={() => deletePortfolio(symbol)}
        className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
      >
        X
      </button>
    </div>
  );
};

export default PortfolioCard;
