import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, company, service, timeline, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, email, or message" },
        { status: 400 }
      );
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create the email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER, // Sender address
      to: process.env.SMTP_TO_EMAIL, // Your email address to receive leads
      subject: `New Consultation Request: ${company ? company : fullName} - ${service}`,
      text: `
      New Consultation Request from Neptune Website:

      Name: ${fullName}
      Email: ${email}
      Company: ${company || "N/A"}
      Service of Interest: ${service}
      Timeline: ${timeline}

      Message:
      ${message}
      `,
      html: `
        <h2>New Consultation Request from Neptune Website</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service of Interest:</strong> ${service}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("[Neptune Contact Route] Email sent successfully via SMTP.");

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Neptune Contact Route Error]:", error);
    return NextResponse.json(
      { error: "Internal server error processing contact submission." },
      { status: 500 }
    );
  }
}

