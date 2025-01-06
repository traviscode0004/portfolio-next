import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({ region: 'us-east-1' }); // Replace with your SES region

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Construct the email parameters
    const params = {
      Source: 'travis@traviscode.com', // Verified sender address
      Destination: {
        ToAddresses: ['travis@traviscode.com'], // Recipient address
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}`,
        },
        Body: {
          Text: {
            Data: `You have a new message from ${name} (${email}):\n\n${message}`,
          },
        },
      },
    };

    // Send the email using SES
    const command = new SendEmailCommand(params);
    await sesClient.send(command);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
