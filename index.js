const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const path = require('path')

const scrambler = require('./scrambler.js')

dotenv.config()

async function main(details) {
    const { recipientName, recipientAddress, senderName, senderEmail } = details
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    })
    try {
        const info = await transporter.sendMail({
            from: `DU Trampoline ${process.env.GMAIL_USER}`,
            to: `${senderEmail}`,
            subject: `Christmas Card Swap! [Sent at ${Date.now()}]`,
            text: `Hi ${senderName},\n\nYou're receiving this automated message as you signed up to the DU Trampoline Christmas Card Swap for 2020! The name and address of the person you are writing to is below. Remember to be festive, and have a great holiday!\n\n${recipientName}\n${recipientAddress}\n\n-- [FROM: "DU Trampoline" <${process.env.GMAIL_USER}>]`
        })
        console.log('Successfully sent to', senderEmail)
    } catch (err) {
        console.error(`There was an error sending email from <${process.env.GMAIL_USER}> to ${senderName} <${senderEmail}>. The name and address that were meant to be sent were probably ${recipientName !== undefined && recipientAddress !== undefined ? 'not ' : ''}part of the problem. The error output is below.`)
        console.error(err)
    }
}

if (process.argv.length !== 3 || path.extname(process.argv[2]) !== '.csv') {
  console.error('Please provide a CSV file!')
} else {
  scrambler(process.argv[2]).forEach(row => {
    main(row).catch(console.error)
  })
}
