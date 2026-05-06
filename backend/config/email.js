import nodemailer, { createTransport } from 'nodemailer'
 export const Transport=createTransport({
    service:'gmail',
    auth:{
        user:'anujchh287@gmail.com',
        pass:'atnn brey ymxp vxdh'
    }
})
