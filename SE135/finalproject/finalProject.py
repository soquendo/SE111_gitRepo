import re
from threading import local
import pandas as pd
from datetime import datetime
import locale
import matplotlib.pyplot as plt
from statistics import mean


def days_between(d1, d2):
    return abs((d2 - d1).days)

# Borrowed from https://pythonprogramming.net/how-to-program-best-fit-line-machine-learning-tutorial/
def best_fit_slope(xs,ys):
    m = (((mean(xs)*mean(ys)) - mean(xs*ys)) /
         ((mean(xs)*mean(xs)) - mean(xs*xs)))
    return m

df = pd.read_excel('SeedUnofficialAppleData.xlsx')
prices = df.iloc[:,8][1:].dropna()
phones = df.iloc[:,0][1:].dropna()
lifespan = df.iloc[:,6][3:].dropna()



# Remove all the 'contract' prices as they don't reflect the MSRP
for x in range(0,22):
    # if the number is odd, remove it
    if (x % 2) == 1:
        prices.iloc[x] = None
prices.iloc[24] = None
prices.iloc[26] = None
prices.iloc[30] = None
# Concat the 'plus' models together with their respective base model
prices.iloc[16] = prices.iloc[16] + " " + prices.iloc[18]
prices.iloc[18] = None
prices.iloc[20] = prices.iloc[20] + " " + prices.iloc[22]
prices.iloc[22] = None
prices.iloc[25] = prices.iloc[25] + " " + prices.iloc[27]
prices.iloc[27] = None
prices.iloc[28] = prices.iloc[28] + " " + prices.iloc[29]
prices.iloc[29] = None
prices.iloc[31] = prices.iloc[31] + " " + prices.iloc[32]

prices = prices.dropna()
# When doing dropna, it keeps the index column so this just restructures the list
prices = prices.reset_index(drop=True)

sum = 0
count = 0
price_lst = []
x = 0
for price in prices:
    if (x < 16):
        # Remove all garbage characters from the price column to extract only the numbers using regex
        price = re.findall('\d*\.?\d+',str(price))
        # some of the price columns contain multiple values, presumably for higher storage models so we'll take the average of those prices
        if isinstance(price, list):
            price_tmp = 0
            for amt in price:
                sum += int(amt)
                price_tmp += int(amt)
                count += 1
            price_lst.append(int(price_tmp / len(price)))
        else:
            sum+= price
            price_lst.append(int(price))
            count += 1
        x = x + 1
# calculate average
avg_price = sum / count

# restructure the columns
lifespan = lifespan.reset_index(drop=True)
phones = phones.reset_index(drop=True)


# Calculate the lifespan average by calculating days between release date and discontinutation date
days_sum = 0
lifespan_lst = []
for k,v in lifespan.iteritems():
    lifespan[k] = lifespan[k].strip()
    life = re.findall('[\d\,\.\ ]+', lifespan[k])
    year = float(life[0])
    if len(life) > 1:
        # drop the comma from the 2nd column
        year += float(life[1][1:]) / 12
    lifespan_lst.append(year)
xs = [0]
ys = [avg_price]
# only include up to the iphone x as the data for the newer phones is too new to calculate the best fit line
for index in range(0, 16):
    x = [0]
    y = [price_lst[index]]
    # Convert to years
    x.append(lifespan_lst[index])
    y.append(0)
    plt.scatter(x,y, label=phones[index])
xs.append(mean(lifespan_lst[0:16]))
ys.append(0)
# Plot the "best fit" line using the mean of all iphone price and their lifespan
plt.plot(xs,ys, label="Regression Line")
plt.xlabel("Lifespan (Years)")
plt.ylabel("Price ($)")
plt.title("iPhone Price Over Time")
plt.legend()
plt.show()