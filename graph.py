#!/usr/bin/env python
# coding: utf-8

# In[6]:


import json
import matplotlib.pyplot as plt

with open('bleh.json') as f:
    data = json.load(f)

plzwork = (data['transactions']['transactions'])
# print(plzwork)
dic = {}
for i in plzwork:
    category = i['category'][0]
    amount = i['amount']
    # print(type(category))
    if category in dic:
        a = dic.get(category)
        b = a+amount
        dic[category] = b
    else:
        dic[category] = amount

    # print('')
print(dic)

keys = dic.keys()
values = dic.values()

fig = plt.figure()
ax = fig.add_axes([0,0,1,1])

ax.bar(keys, values, color="yellow")
plt.show()


# In[ ]:




