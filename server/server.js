
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const flash = require('express-flash');

// start up the mongo database
require('./modules/database');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const mapRouter = require('./routes/map.router')
const verifyRouter = require('./routes/verify.router');
const emailRouter = require('./routes/email.router');
const resetRouter = require('./routes/reset.router');
const requestRouter = require('./routes/request.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

app.use(flash());

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
<<<<<<< HEAD
app.use('/api/verify', verifyRouter);
app.use('/api/email', emailRouter);
app.use('/api/map', mapRouter);
=======
app.use('/api/reset', resetRouter);
>>>>>>> c601402ce5e7adbaec3e8c501cc404d6df9c7b77
app.use('/api/request', requestRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
