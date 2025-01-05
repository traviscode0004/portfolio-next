import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure the transporter with GoDaddy's recommended SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'traviscode.com', // Outgoing SMTP server
      port: 465, // Use port 465 for SSL
      secure: true, // Enable SSL/TLS
      auth: {
        user: process.env.EMAIL_USER, // Your GoDaddy email address
        pass: process.env.EMAIL_PASS, // Your GoDaddy email password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email address
      to: 'travis@traviscode.com', // Recipient's email address
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch {
    // Simplified error handling
    console.error('Error sending email');
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
