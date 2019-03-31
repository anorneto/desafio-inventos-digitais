"use strict";
const mailer = require('./mailer');

module.exports.emailNotification = (event, context, callback) => {

  // parse json into javascript objetc
  const data = JSON.parse(event.body);

  mailer.generateContent(data) // generate Email Content from parsed json
    .then( content =>  mailer.sendEmail(content) ) //send the Email !!!
    .then( sucessMessage => {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
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


