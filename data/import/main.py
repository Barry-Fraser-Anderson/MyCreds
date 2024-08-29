SOURCE_DOC = r"C:\Users\barry\OneDrive\Documents\AAA Passwords.xlsx"
API_URL = "http://localhost:3000"

import requests
import uuid0
import pandas as pd

df = pd.read_excel(SOURCE_DOC, dtype=str).fillna("")
accounts = df.values.tolist()

categories = []


def add_account(acc) -> None:
    if acc[0] == "":  # Empty row
        return
    if acc[1] == "":  # Category header
        print(f"Category: {acc[0]}")
        categories.append(acc[0])
        return

    data = {}
    data["id"] = uuid0.generate().base62
    data["name"] = acc[0]
    data["login"] = acc[1]
    data["password"] = acc[2]
    if acc[3] != "":
        data["code"] = acc[3]
    if acc[4] != "":
        data["notes"] = acc[4]
    #    print(data)

    response = requests.post(
        f"{API_URL}/accounts", json=data, headers={"Content-Type": "application/json"}
    )
    print(response.json())


# response = requests.get(f"{API_URL}/accounts")
# print(response.json())

[add_account(acc) for acc in accounts]
print(categories)
