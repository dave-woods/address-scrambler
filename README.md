# Address Scrambler

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

The program will parse the data, match each person with one other person randomly as sender and receiver pairs. A pair may or may not match up both ways, i.e. Person A may send to Person B and receive from Person B, or they may send to Person B and receive from Person C. It is guaranteed that no person will send to or receive from themselves. No one except the sender will know who their receiver is.

## Installation

Download the code with `git clone https://github.com/dave-woods/address-scrambler.git` and run `npm install` to install the dependencies -- there are a small number of these, purely to avoid re-inventing the wheel for this small a project.

You will need to create a file named `.env` which contains your email credentials as follows:

```
GMAIL_USER="user@example.com"
GMAIL_PASS="password"
```

Due to the configuration, a Gmail account is required for use, and you will probably need to "allow less secure apps" in your account's security settings. For details, [see here](https://nodemailer.com/usage/using-gmail/). If you would prefer to use a different email service, you will need to modify the created transport in `index.js`.

## Running the program

Run the program with the command `npm start -- data.csv`, where "data.csv" contains the information in the format described above.

By default, the data file is not removed after running the program. Be careful with sensitive data. The file can be removed after completion by running the command `npm start -- data.csv && rm data.csv`.
