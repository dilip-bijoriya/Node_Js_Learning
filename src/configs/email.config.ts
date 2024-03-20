import nodemailer from 'nodemailer';

const sendEmail = async (to: any, subject: any, text: any) => {
    const send = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        host: process.env.EMAIL_HOST,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const option = {
        from: `<process.env.EMAIL_USER>`,
        to: to,
        subject: subject,
        html: text
    }

    send.sendMail(option, (error: any, info: any) => {
        if (error) {
            console.log(error);
        } else {
            console.log("email sent!");
        }
    });
}


export default sendEmail;