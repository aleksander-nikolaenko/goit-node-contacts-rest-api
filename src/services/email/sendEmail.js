const sgMail = require("@sendgrid/mail");

const { SG_API_KEY } = process.env;

sgMail.setApiKey(SG_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "aleksander.nikolaenko@gmail.com" };
    await sgMail.send(email);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = sendEmail;
