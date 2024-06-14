import { NextResponse, NextRequest } from 'next/server' //retrieve forData object
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request) {
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NODEMAILER_PW;
    const myEmail = process.env.NODEMAILER_EMAIL;

    const formData = await request.formData() // get form data , name exported data
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('textarea')
    const radio = formData.get('radioBtns.radios')
    console.log(formData)

     //nodemailer object, which will send email
  const transporter = await nodemailer.createTransport({
    // host: "smtp-mail.outlook.com",
    // port: 587,
    // tls: {
    //     ciphers: "SSLv3",
    //     rejectUnauthorized: false,
    // },
    port: 465,
    host: "smtp.gmail.com",
    service: 'gmail',
    tls: { rejectUnauthorized: false },

    auth: {

        user: username,
        pass: password
    },
    secure: true,
});

//actually send email
        try {

            const mail = await transporter.sendMail({
                from: username,
                to: myEmail,
                replyTo: email,
                subject: `Website activity from ${email}`,
                html: `
                <h1>Contact Form from Website</h1>
                <p>Name: ${name} </p>
                <p>Email: ${email} </p>
                <p>Message: ${message} </p>
                <p>Message: ${radio} </p>
                `,
            })

            return NextResponse.json({ message: "Success: email was sent" })

        } catch (error) {
            console.log(error)
            NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
        }

}