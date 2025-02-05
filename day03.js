function getCurrency(e) {
    e.preventDefault();
    const currencyInput = document.getElementById("currencyInput").value
    console.log("Currency Code:", currencyInput);
    fetchData(currencyInput);
}

async function fetchCurrencyRate() {
    return fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => {
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('error fetching currency rate:', error);
        });
}

function fetchData(currencyCode) {
    fetchCurrencyRate()
        .then(data => {
            if (data && data.rates) {
                if (currencyCode in data.rates) {
                    const rate = data.rates[currencyCode];
                    document.getElementById('results').textContent = `1 USD = ${rate} ${currencyCode}`;
                } else {
                    document.getElementById('results').textContent = `${currencyCode} does not exist`;
                }
            }
        })
        .catch(error => {
            console.error('Error in fetchData:', error);
        });
}
