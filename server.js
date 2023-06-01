const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 5000;

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  auth: {
    user: "contato@cesararquitetura.com.br",
    pass: "Arquiteto21#",
  },
});

app.use(express.json());

app.post("/send", (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: "contato@cesararquitetura.com.br",
    subject: "Contato pelo Site",
    html: `
      <p>Nome: ${name}</p>
      <p>Email: ${email}</p>
      <p>Telefone: ${phone}</p>
      <p>Mensagem: ${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: "Ocorreu um erro ao enviar a mensagem." });
    } else {
      console.log("Email enviado: " + info.response);
      res.status(200).send({ message: "Mensagem enviada com sucesso." });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://cesararquitetura.com.br:${port}`);
});
