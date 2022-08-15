const { v4: uuid } = require("uuid");
const sendEmail = require("./sendEmail");

const sendVerifyEmail = async (email, verificationToken = uuid()) => {
  const { PORT } = process.env;
  const msg = {
    to: email,
    subject: "Confirm your email",
    html: `
      <table 
      cellpadding="0" 
      cellspacing="0" 
      border="0" 
      width="100%" 
      style=" background: #f5f5f5; 
              min-width: 320px; 
              font-size: 1px; 
              line-height: normal;">
      <tr>
      <td 
      align="center" 
      valign="top">
      <table 
      cellpadding="0" 
      cellspacing="0" 
      border="0" 
      width="600" 
      class="table600" 
      style=" max-width: 600px; 
              min-width: 320px; 
              background: #ffffff;">
      <tr>
      <td 
      align="center" 
      valign="top">

      <div 
      style=" height: 20px; 
              line-height: 20px; 
              font-size: 20px;">
      &nbsp;
      </div>
      <p 
      style = " font-size: 16px;
                margin: 0;
                display: block;">
      Click the button to confirm your email
      </p>
      <div 
      style=" height: 20px; 
              line-height: 20px; 
              font-size: 20px;">
      &nbsp;
      </div>
      <a 
      style = "text-decoration: none;
                text-transform: uppercase;
                font-size: 16px;
                padding: 20px;
                width: 150px;
                display:block;
                color: #f7f8fc;
                background-color: #2c32d4;
                border-radius: 5px; "
      href="http://localhost:${PORT}/api/users/verify/${verificationToken}"
      target="_blank">
      Click here
      </a>
      <div 
      style=" height: 20px; 
              line-height: 20px; 
              font-size: 20px;">
      &nbsp;
      </div>

      </td>
      </tr>
      </table>
      </td>
      </tr>
      </table>
`,
  };
  await sendEmail(msg);
  return verificationToken;
};

module.exports = sendVerifyEmail;
