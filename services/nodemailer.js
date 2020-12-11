require('dotenv').config();
const nodemailer = require('nodemailer');

// Create the email transport method with default values
const smtpTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.DB_EMAIL,
    pass: process.env.DB_EMAIL_PASS,
  },
});

const sendNodemailer = (req, res, next) => {
  const data = req.body;
  const mailOptions = {
    from: `${data.email} <${process.env.DB_EMAIL}>`,
    to: 'publicacoes@guiasdeportugal.org',
    replyTo: `${data.email}`,
    subject: `Pedido de Contacto - Queres ser Guia ?`,
    html: `<p><b>Recebeu um pedido de contacto através do formulário do site da AGP, pode consultar as informações abaixo.</b></p><div>Idade: ${data.idade}</div><div>Concelho: ${data.concelho}</div><div>Freguesia: ${data.freguesia}</div><div>Email: ${data.email}</div><div>Telefone: ${data.telefone}</div>`,
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

module.exports = sendNodemailer;
