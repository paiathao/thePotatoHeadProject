# The Potato Head Project
The Potato Head is a full-stack webapp designed to help thepotatoheadproject.org organized all of the requests they received for a care-package. The Potato Head Project is a non-profit organization that gives hope to families of micro-preemies babies.

##Live on Heroku!:
https://thepotatoheadproject.herokuapp.com/#/login

## Built With
- React.js
- React-Redux
- Redux Saga
- Express
- Mongoose
- Passport
- NodeMailer

### Getting Started

Required: 
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Mongo DB](www.mongodb.com/)
- [Robo 3T](https://robomongo.org/)

To run a development build on your own machine:
1) Clone/download Repository
2) npm install
3) Create a .env file with the following variables:
```
SERVER_SESSION_SECRET=(insert a session secret here )
CLIENT_SECRET=(insert ur email client secret here)
CLIENT_USER=(insert ur email here)
CLIENT_ID=(insert your email client id here)
CLIENT_REFRESHTOKEN=(insert your email refresh token here)
CLIENT_ACCESSTOKEN=(insert your email access token here)
GOOGLE_APIKEY=(insert the google API key here)
```
4) If use gmail, set up your credentials. Find out more at https://developers.google.com/gmail/api/auth/about-auth & https://developers.google.com/gmail/api/auth/web-server
5) Set up google API Key. Find out more at https://console.cloud.google.com
6) In terminal, create a user "admin"
7) `npm run server`
8) `npm run client`

### Completed Features
- A form to take in requests
- Send a automate email once request is successfully submitted
- Admin table with requests data
- Button to add tracking number and note that will automatically send a response email to requestor with the input tracking number and note included in the email template
- The ability to import all subscribers name & email into a csv
- Cluster map that showed the impact that The Potato Head organization have made so far


### Authors
Jimmy Brannon, Casey Clowers, Paia Thao, and Toua Thao
