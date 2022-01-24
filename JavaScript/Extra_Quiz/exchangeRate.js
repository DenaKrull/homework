//this file contains code to fetch the exchange rate and console it out


async function getJson(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.error('Error ', e);
  }
}


async function exchangeRates() {
  const data = await getJson('https://free.currconv.com/api/v7/convert?q=USD_ILS&compact=ultra&apiKey=feff4437383357b88f7b');
  console.log(data);
}


exchangeRates();