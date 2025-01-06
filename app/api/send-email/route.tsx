import AWS from 'aws-sdk';

interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { name, email, message }: EmailRequestBody = await req.json();

    // Configure AWS SDK
    AWS.config.update({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    // Create SES service object
    const ses: AWS.SES = new AWS.SES();

    // Email options
    const params: AWS.SES.SendEmailRequest = {
      Destination: {
        ToAddresses: ['travis@traviscode.com'], // Replace with your recipient
      },
      Message: {
        Body: {
          Text: { Data: `You have a new message from ${name} (${email}):\n\n${message}` },
        },
        Subject: { Data: `New Contact Form Submission from ${name}` },
      },
      Source: 'travis@traviscode.com', // Must be a verified email address
    };

    // Send the email
    const result: AWS.SES.SendEmailResponse = await ses.sendEmail(params).promise();
    console.log('Email sent:', result);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
