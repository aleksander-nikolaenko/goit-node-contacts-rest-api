const { v4: uuid } = require("uuid");
const sendEmail = require("./sendEmail");

const sendVerifyEmail = async (email, verificationToken = uuid()) => {
  const { PORT } = process.env;
  const msg = {
    to: email,
    subject: "Confirm your email",
    html: ` 
    <p style = "font-size: 16px; 
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
    ">
    Click the button to confirm your email
    </p>
    <a style = " text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    padding: 20px 60px;
    color: #f7f8fc;
    background-color: #2c32d4;
    border-radius: 5px; "
    href="http://localhost:${PORT}/api/users/verify/${verificationToken}"
    target="_blank">
      Click here
    </a>

  `,
  };
  await sendEmail(msg);
  return verificationToken;
};

module.exports = sendVerifyEmail;
