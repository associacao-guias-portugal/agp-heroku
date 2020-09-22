require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 5000; //HEROKU
const path = require("path"); // HEROKU
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const sendNodemailer = require('./services/nodemailer');
const connection = require('./config');
const cors = require('cors');
const morgan = require('morgan');
const jwtMiddleware = require('./services/jwtMiddleware');

const homepageRouter = require('./routes/homepageRouter');
const newsRouter = require('./routes/newsRouter');
const journalRouter = require('./routes/journalRouter');
const loginRouter = require('./routes/loginRouter');
const storeRouter = require('./routes/storeRouter');
const associationRouter = require('./routes/associationRouter')
const ramosRouter = require('./routes/ramosRouter');
const contatoRouter = require('./routes/contatoRouter');
const filesRouter = require('./routes/filesRouter');
const metodoGuidistaRouter = require('./routes/metodoGuidistaRouter');
const palavraAosPaisRouter = require('./routes/palavraaospaisRouter');
const recursosRouter = require('./routes/recursosRouter');
const worldAssociationRouter = require('./routes/worldAssociationRouter');
const historiaGuidismoRouter = require('./routes/historiaGuidismoRouter');
const usefulLinksRouter = require('./routes/usefulLinksRouter')
app.use(express.json());

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Database successfully connected');
// });

app.use(
  cors({
    credentials: true,
    origin: process.env.CLEARDB_DATABASE_URL || 'http://localhost:5000',  //HEROKU
  })
);
app.use(morgan('dev'));

app.use('/login', loginRouter);
app.use('/homepage', homepageRouter);
app.use('/news', newsRouter);
app.use('/journal', journalRouter);
app.use('/store', storeRouter);
app.use('/association', associationRouter);
app.use('/ramos', ramosRouter);
app.use('/contato', contatoRouter);
app.use('/files', filesRouter);
app.use('/metodo-guidista', metodoGuidistaRouter);
app.use('/palavra-aos-pais', palavraAosPaisRouter);
app.use('/recursos', recursosRouter);
app.use('/worldAssociation', worldAssociationRouter);
app.use('/historia-guidismo', historiaGuidismoRouter);
app.use('/ligacoes-uteis', usefulLinksRouter);

//HEROKU
app.use(express.static(path.join(__dirname, 'client', 'build')));


passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    (email, password, cb) => {
      connection.query('SELECT * from users WHERE email = ?', [email], (err, results) => {
        if (err) return cb(err);
        if (!results.length) {
          return cb(null, false, { message: 'Invalid Email' });
        }
        if (!bcrypt.compareSync(password, results[0].password)) {
          return cb(null, false, { message: 'Invalid Password' });
        }
        return cb(null, results[0]);
      });
    },
  ));

passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'agp_secret',
  },
  ((jwtPayload, cb) => cb(null, jwtPayload)),
));

app.get('/verify-token', jwtMiddleware, (req, res) => {
  const { password, ...user } = req.user;
  res.send(user)
})

// Nodemailer - Send Contact form API
app.post('/email', sendNodemailer, (req, res) => {
  if (req.successMessage) {
    res.json({
      code: 200,
    });
  } else {
    res.json({
      code: 500,
    });
  }
});


// In case path is not found, we return the ‘Not Found’ 404 code
app.use((_req, _res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


//HEROKU
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The app is running on port ${port}...`);
  }
});
