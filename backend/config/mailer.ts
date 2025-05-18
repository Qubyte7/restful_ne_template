import nodemailer from 'nodemailer';
import Handlebars, { template } from 'handlebars';
import path from 'path';
import fs from 'fs';
import { name } from 'typescipt';

//configure the transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,

    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})

interface MailOptions {
    from: string;
    to: string;
    subject: string;
    text?: string; // Plain text body
    html?: string; // HTML body
  }
  
  export const sendEmail = async ({toEmail,name}:{toEmail:string; name?:string}) => {
    try {

      //read HTML template 
      const templatePath = path.join(__dirname,'../templates/WelcomeEmail.html');
      const templateContent =  fs.readFileSync(templatePath,'utf-8');

      //compile the template with handlerbars
      const template =  Handlebars.compile(templateContent);
      
      //provide the needed data the template
      const htmlContent = template({name:name || ' our Lovely Customer'});
      
      await transporter.sendMail({
        from: `"Nyabihu Parking Port" <${process.env.EMAIL_USER}>`, // Sender address
        to: toEmail, // Recipient
        subject: "Welcome", // Subject line
        text:`thank you for joining Nyabihu Parking Port,${name || 'customer'} `, // Plain text body
        html: htmlContent, // HTML body (optional)
      });
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  };