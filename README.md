A short program which takes in a CSV file of the format "Name, Email, Address". It shuffles the rows and sends an email to each person with the name and address of one of the others. There must be at le
ast two rows of data.

The purpose is to exchange addresses for a Christmas card swap, similar to a secret santa. The email subject and body reflect this original purpose, but may be modified as needed.

The CSV file should look something like the below:

```
"Name","Email","Address"
"Tester One","test1@example.com","123 Test Street, Testville"
"Tester Two","test2@example.com","456 Test Road, Testtown"
"Tester Three","test3@example.com","789 Test Avenue, Test City"
```

The program is run with the command 
`node index.js data.csv`
which will parse the data, match each person with one other person randomly as sender and receiver pairs. A pair may or may not match up both ways, i.e. Person A may send to Person B and receive from Person B, or they may send to Person B and receive from Person C. It is guaranteed that no person will send to or receive from themselves.
