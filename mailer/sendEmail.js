const mailer = require("nodemailer");
const config = require("./config");

module.exports = content => {
  return new Promise((resolve, reject) => {
    // configure transporter
    let transporter = mailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      service: "gmail",
      auth: {
        user: config.user,
        pass: config.password
      }
    });

    // define email options
    const mailOptions = {
      from: config.from,
      to: config.to,
      subject: content.subject,
      text: content.textBody
    };
    // send the email
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        const errorMessage = JSON.stringify(error);
        console.error("ERROR sending email.", errorMessage);
        reject(new Error(errorMessage));
      } else {
        const successMessage = `Message Sucefully Sent!`;
        console.log(successMessage);
        resolve(successMessage);
      }
    });
  });
};