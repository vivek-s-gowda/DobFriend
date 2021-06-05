import pandas as pd
from pymongo import MongoClient
client = MongoClient('mongodb://dobfriend:1234****asdf@cluster0-shard-00-00.rpfv6.mongodb.net:27017,cluster0-shard-00-01.rpfv6.mongodb.net:27017,cluster0-shard-00-02.rpfv6.mongodb.net:27017/dobfriend?ssl=true&replicaSet=atlas-p2skss-shard-0&authSource=admin&retryWrites=true&w=majority')
userInfo = []
df = pd.read_csv('DOBsearch - Sheet1.csv')

for i in range(0,len(df['DOB'])):
    userInfo.append({
        "name" : df['NAME'][i],
        "DOB" : df['DOB'][i],
        "fblink": df['Facebook link'][i],
        "instid": df['Insta link'][i],
        "month": df['Month'][i],
        "gender": df['Gender'][i]})
print(userInfo)

try:
    print("Connected To Mongo DB")
    db=client.dobfriend
    db.users.drop()
    db.users.insert_many(userInfo)

except Exception:
    print("Unable to connect to the server.")