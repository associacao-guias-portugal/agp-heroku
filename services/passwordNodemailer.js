require('dotenv').config();
const nodemailer = require('nodemailer');

const smtpTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.DB_EMAIL,
    pass: process.env.DB_EMAIL_PASS,
  },
});

const sendPassNodemailer = (req, res, next) => {
  const mailOptions = {
    from: `Associação Guias de Portugal <${process.env.DB_EMAIL}>`,
    to: `${req.email}`,
    subject: `AGP Backoffice - Alteração Password`,
    text: `Código a inserir para alterar password: ${req.hash}`,
    html: `Código a inserir para alterar password: ${req.hash}`,
  };

  smtpTransporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      req.errorMessage = error.message;
    } else {
      req.successMessage = 'Sent';
    }
    smtpTransporter.close();
    next();
  });
};

module.exports = sendPassNodemailer;
