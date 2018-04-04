[![CircleCI](https://circleci.com/gh/Syncano/syncano-socket-coinmarketcap/tree/develop.svg?style=svg)](https://circleci.com/gh/Syncano/syncano-socket-coinmarketcap/tree/develop)

# coinmarketcap

`version:` **0.0.1**

Integrates coinmarketcap for tracking capitalization of various cryptocurrencies.

To install, run:

```
syncano-cli add coinmarketcap
```

## Endpoints

### ticker

Displays current prices of crypto coins

#### Parameters

| name | type | description | examples | long_description
| ---- | ---- | ----------- | -------- | ----------------
| start | integer | Optional value to return results from rank [start] and above | 10 | 
| limit | integer | Optional value to return a maximum of [limit] results (default is 100, use 0 to return all results) | 100 | 
| convert | string | Optional value to return price, 24h volume, and market cap in terms of another currency. | EUR | Valid values are "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR" 



#### Response

mimetype: `application/json`

##### Success `200`

```
{
  "message": 'OK',
  "statusCode": 200,
  "data": [{}]
}
```

##### Failed `400`

```
{
  "code": 400,
  "message": "Make sure to use GET request method."
}
```

### ticker-by-currency

Displays current prices of crypto coins based on id(a.k.a. currency)

#### Parameters

| name | type | description | examples | long_description
| ---- | ---- | ----------- | -------- | ----------------
| id | string | Compulsory value to target a specific currency. | bitcoin | 
| convert | string | Optional value to return price, 24h volume, and market cap in terms of another currency. | NOK | Valid values are "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR" 



#### Response

mimetype: `application/json`

##### Success `200`

```
{
  "message": 'OK',
  "statusCode": 200,
  "data": [{}]
}
```

##### Failed `400`

```
{
  "message": "NOT FOUND",
  "statusCode": 404,
  "data": { "error": "id not found" }
}
      
```

### global

Returns aggregated statistics across all crypto-currencies

#### Parameters

| name | type | description | long_description | examples
| ---- | ---- | ----------- | ---------------- | --------
| convert | string | Optional value to return price, 24h volume, and market cap in terms of another currency. | Valid values are "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"  | EUR



#### Response

mimetype: `application/json`

##### Success `200`

```
{
  "message": 'OK',
  "statusCode": 200,
  "data": {}
}
```

##### Failed `400`

```
{
  "argError": "You can only use the optional value(s) listed in ticker method. Check https://coinmarketcap.com/api/ for more information."
}
```
