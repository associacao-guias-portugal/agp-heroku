const nodemailer = require('nodemailer');

// Create the email transport method with default values
const smtpTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'agp.formulario.contacto@gmail.com',
    pass: 'Projecto03Contactos',
  },
});

const sendNodemailer = (data) => {
  const mailOptions = {
    from: `${data.nome} <agp.formulario.contacto@gmail.com>`,
    to: 'a.g.p@netcabo.pt',
    replyTo: `${data.email}`,
    subject: `Contactos Site - ${data.assunto}`,
    text: `${data.mensagem}`,
    html: `<p><b>Mensagem recebida através do formulário do site da AGP, informações abaixo.</b></p><div>Enviado por: ${data.nome}</div><div>Assunto: ${data.assunto}</div><div>Email: ${data.email}</div><div>Mensagem: ${data.mensagem}</div>`,
  };

  smtpTransporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
    }
    smtpTransporter.close();
  });
};

module.exports = sendNodemailer;
