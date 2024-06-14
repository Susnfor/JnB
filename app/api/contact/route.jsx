import { NextResponse, NextRequest } from 'next/server' //retrieve forData object
const nodemailer = require('nodemailer');


// Handles POST requests to /api
export async function POST(request) {

    //nodemailer credentials from env
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NODEMAILER_PW;
    const myEmail = process.env.NODEMAILER_EMAIL;

    const formData = await request.formData() // get form data , (name section of form)
    const name = formData.get('name')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const message = formData.get('textarea')
    const SFC = formData.get('SFC Package')
    const YTandTT = formData.get('Youtube and Tiktok Package')
    const Podcast = formData.get('Podcast Package')


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
});

//actually send email
        try {
            let mailOptions = {
                from: username,
                to: myEmail,
                replyTo: email,
                credentials: '',
                subject: `JnB Contact Form from ${email}`,
                html: `
                <h2>Details</h2>
                <p>Name: ${name + " " + (lastName ? lastName : "")} </p>
                <p>Email: ${email} </p> 
                <h2>What is the reason for them contacting?</h2>
                <p>${SFC || YTandTT || Podcast ? "The package they're enquiring about is:" : "They didn't select a package"}
                ${ SFC ? "SFC Package" : ""}
                ${YTandTT ? "Youtube and Tiktok Package" : ""} 
                ${Podcast ? "Podcast Package" : ""} </p>
                <p>Message: ${message} </p>
                `,
            }
            const mail = await transporter.sendMail(mailOptions);

            return NextResponse.json({ message: "Success: email was sent" })
        } catch (error) {
            console.log(error)
            NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
        }

}