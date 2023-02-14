const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

exports.sendEmail = (req, res) => {
    console.log('Email Controller: ', req.body);
    const {  email, ticketStatus, answare  } = req.body;
    const params = {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: [email]
        },
        ReplyToAddresses: [process.env.EMAIL_TO],
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `<html><body><h1>Hello ${email} status: ${ticketStatus}</h1 style="color:red;"><p>${answare}</p></body></html>`
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Complete your registration'
            }
        }
    };

    const sendEmailOn = ses.sendEmail(params).promise();

    sendEmailOn
        .then(data => {
            console.log('email submitted to SES', data);
            res.send('eMail Sent');
        })
        .catch(error => {
            console.log('ses email on answare', error);
            res.send('eMail failed');
        });
};