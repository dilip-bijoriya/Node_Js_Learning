const EmailTemplate = (userName: any) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login Successful</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
  
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
  
          h1 {
            color: #333;
            text-align: center;
          }
  
          p {
            color: #555;
            line-height: 1.6;
            margin-bottom: 15px;
          }
  
          .footer {
            margin-top: 20px;
            text-align: center;
            color: #777;
          }
  
          .signature {
            margin-top: 10px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Login Successful</h1>
          <p>
            Dear ${userName},
            <br>
            Congratulations! You have successfully logged in to your account.
            <br>
            If you have any questions or concerns, please feel free to contact us.
          </p>
  
          <div class="footer">
            <p>Thank you for using our service.</p>
            <p class="signature">Dilip Bijoriya</p>
          </div>
        </div>
      </body>
      </html>
    `;
}

export default EmailTemplate;
