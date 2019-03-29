"use strict";
const mailer = require('./mailer');

module.exports.emailNotification = (event, context, callback) => {


  const data = event.pathParameters.form ;


  mailer.generateContent(data) // generate Email Content
    .then( content => { mailer.sendEmail(content) }) //send the Email !!!
    .then( sucessMessage => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: sucessMessage
        })
      };
      callback(null, response);
    })
    .catch(errorMessage => {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error: errorMessage
        })
      };
      callback(null, response);
    });
};
