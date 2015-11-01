# AWS DynamoDB GUI Client
GUI Tool used to interact with DynamoDB

This tool runs as a web application inside your browser.

# Installation
```
$ npm install -g dynamodb-gui
```
Be sure to have your AWS credentials in the ~/.aws/credentials file

For example:
```
[default]
aws_access_key_id = AKID
aws_secret_access_key = SECRET
[steve]
aws_access_key_id = AKID
aws_secret_access_key = SECRET
```

# Usage
```
$ dynamodb-gui
```
Open a new browser and navigate to http://localhost:4000

# Features
- List all dynamodb tables under your account
- View all records on a selected table using UI-GRID.
- Sorting, filtering enabled for all fields.
- Filtering enabled for tables.
- Home page features favorite table list. (add to this list from the table view)
- Full front end caching of table list
- Full back end caching for all data retrieved from tables for subsequent access
- Cache busting enabled with a simple refresh button on the data view.

# Notes
- Currently, no editing is possible. (future versions to come)

# GitHub
https://github.com/eleon182/dynamodb-gui

