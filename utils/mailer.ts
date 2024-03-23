import prisma from "./Prisma";
import nodemailer from "nodemailer";

export const sendMail = async ({ email }: { email: string }) => {
	try {
		//find the user based on userid
		const user = await prisma.user.findUnique({ where: { email } });

		// and send the email
		var transport = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.AUTH_USER,
				pass: process.env.AUTH_PASS,
			},
		});
		const mailing = {
			from: "Sujan Shrestha <me@sujansthadev.com.np>",
			to: email,
			subject: "Greetings.....",
			html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to Our Family!</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px;">

<div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <h1 style="text-align: center; color: #333333;">Welcome to Our Family!</h1>
    <p style="color: #666666;">Dear <span style="color: #007bff; text-transform: uppercase;">${user?.username?.toUpperCase()}</span>,</p>
    <p style="color: #666666;">We are thrilled to welcome you to our community! Your sign-up means a lot to us, and we're excited to have you on board.</p>
    <p style="color: #666666;">At <span style="color: #ff6b6b;">[Your Business Name]</span>, we believe in fostering a sense of belonging and support among our members, and we can't wait for you to experience the warmth and camaraderie of our family.</p>
    <p style="color: #666666;">If you have any questions, concerns, or just want to say hello, feel free to reach out to us at <a href="mailto:me@sujansthadev.com.np" style="color: #007bff; text-decoration: none;"><span style="color: #4CAF50;">me@sujansthadev.com.np</span></a>. We're here for you!</p>
    <p style="color: #666666;">Once again, welcome to the family!</p>
    <p style="color: #666666;">Thank You so much for signing up.</p>
    <p style="color: #666666;">Best regards,<br><a href="https://sujansthadev.com.np" style="color: #4CAF50;">Sujan Shrestha</a></p>
</div>

</body>
</html>
`,
		};

		await transport.sendMail(mailing);
		transport.verify((error, success) => {
			if (error) {
				console.log("mail send", success);
				throw new Error(error.message);
			}
		});
		return { success: true };
	} catch (error: any) {
		console.log(error.message);
		return { success: false };
	}
};
