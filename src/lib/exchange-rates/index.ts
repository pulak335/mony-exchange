const APP_ID = process.env.OPEN_EXCHANGE_RATES_APP_ID;
const BASE_URL = "https://openexchangerates.org/api";

export async function getLatestExchangeRates(baseCurrency: string = "USD") {
  if (!APP_ID) {
    throw new Error("OPEN_EXCHANGE_RATES_APP_ID is not defined in environment variables.");
  }
  try {
    const response = await fetch(`${BASE_URL}/latest.json?app_id=${APP_ID}&base=${baseCurrency}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch exchange rates: ${response.statusText}`);
    }
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
}

export async function getCurrencies() {
  if (!APP_ID) {
    throw new Error("OPEN_EXCHANGE_RATES_APP_ID is not defined in environment variables.");
  }
  try {
    const response = await fetch(`${BASE_URL}/currencies.json?app_id=${APP_ID}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch currencies: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching currencies:", error);
    throw error;
  }
}