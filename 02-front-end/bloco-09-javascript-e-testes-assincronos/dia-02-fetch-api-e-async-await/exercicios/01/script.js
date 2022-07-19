const API_URL = 'https://api.coincap.io/v2/assets';

const getCryptos = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const fetchPromise = await fetch(API_URL, requestOptions);
    const response = await fetchPromise.json();
    return response;
  } catch (error) {
    return error;
  }
};

const usdValueInAnotherCurr = async () => {
  const API_URL =
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

  const fetchAPI = await fetch(API_URL);
  const response = await fetchAPI.json();

  return response;
};

const cryptosList = document.getElementById('cryptos');

window.onload = async () => {
  const cryptos = await getCryptos();
  const usdValueInBrl = await usdValueInAnotherCurr().then(
    (value) => value.usd.brl
  );

  cryptos.data.slice(0, 10).forEach(async ({ name, symbol, priceUsd }) => {
    const listItem = document.createElement('li');
    const priceInBrl = (usdValueInBrl * parseFloat(priceUsd)).toFixed(2);

    listItem.innerText = `${name} (${symbol}): R$${priceInBrl}`;

    cryptosList.appendChild(listItem);
  });
};
