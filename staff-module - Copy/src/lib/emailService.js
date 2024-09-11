// @ts-nocheck
import nodemailer from 'nodemailer'

export async function sendEmail(to, code, staffName) {
    // Create a transporter using SMTP (or a service like Gmail, SendGrid, etc.)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'furqanahmed1872@gmail.com', // your SMTP user
            pass: 'qsntauqaukntxjsw', // your SMTP password
        },
    })

    // Email content
    const mailOptions = {
        from: '"Your Company" <furqanahmed1872@gmail.com>', // sender address
        to, // recipient email
        subject: 'Your Sign-in Code', // Subject line
        text: `Hello ${staffName},\n\nYour sign-in code is: ${code}\n\nThank you!`, // plain text body
        html: `<p>Hello ${staffName},</p><p>Your sign-in code is: <strong>${code}</strong></p><p>Thank you!</p>`, // HTML body
    }

    // Send email
    try {
        let info = await transporter.sendMail(mailOptions)
        console.log('Message sent: %s', info.messageId)
    } catch (error) {
        console.error('Error sending email:', error)
        throw new Error('Failed to send email')
    }
}
