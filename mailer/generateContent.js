const momentTimeZone = require("moment-timezone");

module.exports = data => {
    return new Promise((resolve,reject) => {
        try {
            // timestamp
            const timestamp = `${momentTimeZone
                .tz("America/Sao_Paulo")
                .format("h:mm:ss a , Do MMMM")}.`;
            
            const subject = `Reserva Minions`;
            
            const textBody = `
            Oi ${data},
            
            Reserva de minions feita às ${timestamp}.
            AMÉM!
            FUNCIOONOUU
            `;

            
            console.log(`Generated email content on ${timestamp}.`)
            resolve({
                subject,
                textBody
            });
        } catch (error){
            console.error(" FAIL!!! Error generating email content.", error);
            reject(new Error(JSON.stringify(error)));
        }
    });
};


        // html body
       /*  const htmlBody = `
          <div style="max-width: 600px; margin: 20px auto">
            <h1>Great news!</h1>
            <p style="line-height: 22px; font-size: 16px;">Someone uploaded <b>${data.file}</b> (${data.fileSize} bytes) to your AWS S3 bucket "${data.bucketName}" on ${timestamp}.</p>
            <p style="line-height: 22px; font-size: 16px;">Congrats!</p>
            <p style="line-height: 22px; font-size: 16px;">Sincerely,</p>
            <p style="line-height: 22px; font-size: 16px;"><i>Your Serverless Function</i></p>
          </div>
        `; */
