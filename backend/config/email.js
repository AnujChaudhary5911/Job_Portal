import nodemailer, { createTransport } from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
 export const Transport=createTransport({
    host: 'smtp.gmail.com',  // Service ki jagah direct host ka naam diya
    port: 465,               // Secure port
    secure: true,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})
