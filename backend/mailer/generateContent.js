const momentTimeZone = require("moment-timezone");

module.exports = data => {
    return new Promise((resolve,reject) => {
        try {

            // timestamp
            const timestamp = `${momentTimeZone
                .tz("America/Sao_Paulo")
                .format("h:mm a , Do MMMM")}.`;
            
            const subject = `Reserva Minions`;
            
            const textBody = `    
            Reserva de minions feita às ${timestamp}
            Nome :  ${data.user_name}
            Email: ${data.user_email}
            Cel: ${data.user_cel}
            Minion Reservado: ${data.minions}
            `;
            const htmlBody = `
                <div style="max-width: 600px; margin: 20px auto">
                    <h1></h1>
                    <p style="line-height: 22px; font-size: 16px;">Reserva feita às ${timestamp} .</p>
                    <p style="line-height: 22px; font-size: 16px;">Nome :  ${data.user_name} .</p>
                    <p style="line-height: 22px; font-size: 16px;">Email :  ${data.user_email} .</p>
                    <p style="line-height: 22px; font-size: 16px;">Cel :  ${data.user_cel} .</p>
                    <p style="line-height: 22px; font-size: 16px;">Minion Reservado: ${data.minions}  .</p>
                    <p style="line-height: 22px; font-size: 16px;">Tudo certo!</p>
                    <p style="line-height: 22px; font-size: 16px;"><i>Anor's Serverless Function</i></p>
                </div>
            `;
            
            console.log(`Generated email content on ${timestamp}.`)
            resolve({
                subject,
                textBody,
                htmlBody
            });
        } catch (error){
            console.error(" FAIL!!! Error generating email content.", error);
            reject(new Error(JSON.stringify(error)));
        }
    });
};


        // html body

