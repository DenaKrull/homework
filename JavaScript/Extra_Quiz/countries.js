const select1 = document.getElementById('countriesA');
const select2 = document.getElementById('countriesB');
const exchangeRateDisplay = document.getElementById('exchangeRateDisplay');
const exchangeRateDisplayB = document.getElementById('exchangeRateDisplayB');
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
const symbolA = document.getElementById('symbolA');


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

async function populateCountries() {
    // const data = await getJson('https://free.currconv.com/api/v7/countries?apiKey=feff4437383357b88f7b');
    const data = await getJson('countries.json');
    const array = Object.values(data.results);

    populateCountryList(array, select1);
    populateCountryList(array, select2);

}

async function calculateExchangeRate(firstInput, secondInput) {
    const data = await getJson(`https://free.currconv.com/api/v7/convert?q=${firstInput}_${secondInput},${secondInput}_${firstInput}&compact=ultra&apiKey=feff4437383357b88f7b`);
    // const data = await getJson('USD_ILS ILS_USD.json');
    const exchangeRates = Object.values(data);
    console.log(exchangeRates);
    exchangeRateDisplay.innerText = `1${select1.className} =${exchangeRates[0]} `;
    exchangeRateDisplayB.innerText = `${exchangeRates[1]} = 1 `;

    firstInput.addEventListener('input', () => {
        secondInput.innerText = firstInput.value * `${exchangeRates[0]}`;
    });
}

function populateCountryList(array, select) {
    array.forEach(element => {
        const option = document.createElement('option');
        option.value = `${element.currencyId}`;
        option.innerText = `${element.name} - ${element.currencyName}`;
        option.addClass = `${element.currencySymbol}`;
        select.appendChild(option);

    });
}

function countrySelected() {
    select1.addEventListener('change', () => {
        calculateExchangeRate(select1.value, select2.value);
    });
    select2.addEventListener('change', () => {
        calculateExchangeRate(select1.value, select2.value);
    });

}

populateCountries();
countrySelected();