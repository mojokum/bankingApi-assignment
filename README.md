# Master Table
1. AccountType - Used to store two types of account 1. Current Account & Saving Account
2. TransactionType - Credit & Debit transactions

# TransactionTables
1. Customer
2. Account
3. Transaction Details 


------------------------------
# API TO GET LIST OF CUSTOMERS
-------------------------------

# Retrive all customer details
GET: http://localhost:8080/api/customer/customers
[
    {
        "id": 18,
        "name": "Kumaresan",
        "email": "mojo.kum@gmail.com",
        "contact": "7667337070",
        "createdby": "kumaresan",
        "updatedby": null,
        "createdon": "17:23:06.462+00",
        "updatedon": "17:23:06.462+00"
    }
]

# Create Customer & Account based on account type
POST: http://localhost:3000/api/customer
{
    "name": "Kumaresan",
    "email": "mojo.kum@gmail.com",
    "contact": "7667337070",
    "createdby":"kumaresan",
    "account": {
        "accountype": 2,
        "balance": 600,
        "createdby": "kumaresan"
    }
}
# Transfer amount between accounts
PUT: http://localhost:3000/api/customer
{
    "fromAccount": 12,
    "toAccount": 13,
    "transferAmount": 50
}
  
# Get all transactions based on account id 
http://localhost:3000/api/customer/12/transaction

[
    {
        "id": 4,
        "accountid": 12,
        "beneficiary": 13,
        "amount": "50",
        "transactiontype": 1,
        "createdby": "kumaresan",
        "updatedby": null,
        "createdon": "17:24:52.528+00",
        "updatedon": "17:24:52.528+00"
    },
    {
        "id": 5,
        "accountid": 12,
        "beneficiary": 13,
        "amount": "50",
        "transactiontype": 2,
        "createdby": "kumaresan",
        "updatedby": null,
        "createdon": "17:24:52.564+00",
        "updatedon": "17:24:52.564+00"
    }
]


# Get account balance based on account id 
http://localhost:8080/api/customer/12/balance
{
    "AccountBalance": "550"
}