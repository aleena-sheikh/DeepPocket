import quandl
import requests
from datetime import date


def getStockPrice(date_):

    URL = "https://www.quandl.com/api/v3/datasets/EOD/NKE?"
    PARAMS = {'api_key': "Jcows-6XTLLGpTc-KkFo",
              "start_date": date_, "end_date": date_}
    r = requests.get(url=URL, params=PARAMS)
    data = r.json()
    for x in data:
        dataset = data[x]

    stockPrice = dataset['data'][0][1]
    # print(stockPrice)
    return stockPrice


date_spent = date(2017, 3, 20)
today = date(2017, 12, 28)
stockPrice = getStockPrice(date_spent)
todayStock = getStockPrice(today)
# print(stockPrice, todayStock)

extraMoney = 215.75  # dollars
numberOfStocks = extraMoney // stockPrice
# print(numberOfStocks)
difference = (numberOfStocks*todayStock) - (numberOfStocks*stockPrice)
print(difference)
