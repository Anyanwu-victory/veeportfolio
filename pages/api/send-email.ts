import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";


// To send the message to your email, you need a backend service to handle the form submission.
    // Here's an example using an API route in Next.js:

    // Create a file at `/pages/api/send-email.ts` with the following code:
    
    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
        if (req.method !== "POST") {
          return res.status(405).json({ message: "Method not allowed" });
        }
  
        const { name, email, subject, message } = req.body;
  
        if (!name || !email || !subject || !message) {
          return res.status(400).json({ message: "All fields are required" });
        }
  
        try {
          const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: process.env.EMAIL_USER, // Your email address
              pass: process.env.EMAIL_PASS, // Your email password or app password
            },
          });
  
          await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER, // Your email address
            subject: `Contact Form: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          });
  
          res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Failed to send email" });
        }
      }
  