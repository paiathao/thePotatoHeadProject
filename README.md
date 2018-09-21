# The Potato Head Project Web App

The Potato Head Project is a non-profit organization that gives hope to families of micro-preemies babies.  
*The Potato Head Project Web App* is a full-stack web application designed to help [thepotatoheadproject.org](thepotatoheadproject.org) organize all of the requests they receive for care packages.

## Live on Heroku!

[The Potato Head Project App](https://thepotatoheadproject.herokuapp.com/#/login)

## Built With

- React.js
- React-Redux
- Redux Saga
- Express
- Mongoose
- Passport
- NodeMailer
- CSS

---

### Getting Started

Required:

- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Mongo DB](www.mongodb.com/)
- [Robo 3T](https://robomongo.org/)

To run a development build on your own machine:

1) Clone/download this Repository

2) `npm install`

3) Create a `.env` file with the following variables:

```
 SERVER_SESSION_SECRET=(insert a session secret here )
 CLIENT_SECRET=(insert your email client secret here)
 CLIENT_USER=(insert your email here)
 CLIENT_ID=(insert your email client id here)
 CLIENT_REFRESHTOKEN=(insert your email refresh token here)
 CLIENT_ACCESSTOKEN=(insert your email access token here)
 GOOGLE_APIKEY=(insert the google API key here)
```

4) If you use Gmail, set up your credentials. Find out more at

   [https://developers.google.com/gmail/api/auth/about-auth](https://developers.google.com/gmail/api/auth/about-auth) &  
   [https://developers.google.com/gmail/api/auth/web-server](https://developers.google.com/gmail/api/auth/web-server)

5) Set up Google API Key. Find out more at https://console.cloud.google.com

6) You'll need to register an admin to be able to login. You can use [HTTPie](https://httpie.org/) or [Postman](https://www.getpostman.com/) to send a POST request to the following endpoint.

   Endpoint `/api/user/register`

   Data

```
   {
     "username": "admin",
     "password": "YOUR_PASSWORD",
     "email": "YOUR_EMAIL"
   }
```

7) `npm run server`
8) `npm run client`

---

## Completed Features

- A form to take in care package requests
- Email system for sending an automated email once the request is successfully submitted
- Admin Portal containing a table with request data
- Cluster map that shows the impact and reach that The Potato Head Project has made so far
- Admin actions:  
*'Show Notes'* opens a modal that contains the notes entered into the Request Form  
*'Send Email'* opens a modal to enter the tracking number and a place for the Admin to include  
a note to the requestor. This input will then be populated into the established email template  
*'Print Shipping Label'* links to Admin PayPal page for shipping-label creation  
*'Mark Sent'* changes the row color of the request row, for easy visual cue of open requests  
*'Export Subscribers to CSV'* export a list of all subscribers' names & email addresses into a CSV file

### Authors

[Jimmy Brannon](https://github.com/brannonjames), [Casey Clowers](https://github.com/caclowers), [Paia Thao](https://github.com/paiathao), and [Toua Thao](https://github.com/TouaThao)
