const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
    user: process.env.MAIL_NAME,
    pass: process.env.MAIL_PASS
  }
}
const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

  router.post('/', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    var mail = {
      from: name,
      to: 'rck496@yahoo.com', 
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })

  module.exports = router
  
