import pandas as pd
userInfo = []
df = pd.read_csv('DOBsearch - Sheet1.csv')
start="["
end="]"
print(start)
for i in range(0,len(df['DOB'])):
    # userInfo.append({
    #     "name" : "\""+df['NAME'][i]+"\"",
    #     "DOB" : df['DOB'][i],
    #     "fblink": df['Facebook link'][i],
    #     "instid": df['Insta link'][i],
    #     "month": df['Month'][i],
    #     "gender": df['Gender'][i]})
    print("{")
    print("\"name\":"+"\""+df['NAME'][i]+"\",")
    print("\"dob\":"+"\""+df['DOB'][i]+"\",")
    print("\"fblink\":"+"\""+df['Facebook link'][i]+"\",")
    print("\"instaid\":"+"\""+str(df['Insta link'][i])+"\",")
    print("\"month\":"+"\""+df['Month'][i]+"\",")
    print("\"gender\":"+"\""+df['Gender'][i]+"\"")
    print("}")
    print(",")

print(end)
