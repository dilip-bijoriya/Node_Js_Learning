import nodemailer from 'nodemailer';

const sendEmail = async (to: any, subject: any, text: any) => {
    const send = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "108a73e898e88c",
            pass: "ea52008e55d6d1"
        }
    });

    const option = {
        from: `<dilip.bijoriya@emorphis.in>`,
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