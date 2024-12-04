import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
} from "../company";
import axios from "axios";

const api_key = "ZbKvfwwnxDONGBaaecAFwmd2DlyJFv92";

interface searchResponse {
  data: CompanySearch[];
}
export const searchForCompanies = async (query: string) => {
  try {
    const data = await axios.get<searchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${api_key}`
    );
    return data;
  } catch (error) {
    if (typeof error === "string") {
      console.log("error message: ");
      return error;
    } else {
      console.log("unexpected error occured");
      return "Unexpected error";
    }
  }
};

export const getCompanyProfile = async (query: string | undefined) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https:financialmodelingprep.com/api/v3/profile/${query}?apikey=${api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("Error message from API : ", error.message);
  }
};

export const getKeyMetrics = async (query: string | undefined) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https:financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("Error message from API : ", error.message);
  }
};

export const getIncomeStatement = async (query: string | undefined) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https:financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("Error message from API : ", error.message);
  }
};

export const getBalanceSheet = async (query: string | undefined) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https:financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("Error message from API : ", error.message);
  }
};

export const getCashFlowStatement = async (query: string | undefined) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https:financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&apikey=${api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("Error message from API : ", error.message);
  }
};
