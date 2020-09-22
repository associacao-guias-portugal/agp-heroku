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
  // Alterar o TO quando trocarem de endereço de email !
  const data = req.body;
  const mailOptions = {
    from: `${data.nome} <${process.env.DB_EMAIL}>`,
    to: 'a.g.p@netcabo.pt',
    replyTo: `${data.email}`,
    subject: `Contactos Site - ${data.assunto}`,
    text: `${data.mensagem}`,
    html: `<p><b>Recebeu uma mensagem  através do formulário do site da AGP, pode consultar essa mensagem nas informações abaixo.</b></p><div>Enviado por: ${data.nome}</div><div>Assunto: ${data.assunto}</div><div>Email: ${data.email}</div><div>Mensagem: ${data.mensagem}</div>`,
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
