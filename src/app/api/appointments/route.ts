import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Note: In a real production app, you would put your API key in an .env file
// RESEND_API_KEY=re_123456789
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, date, slot, reason } = body;

    const { data, error } = await resend.emails.send({
      from: 'Terlis Clinic <onboarding@resend.dev>',
      to: ['vamsichinnam111@gmail.com'],
      subject: `New Appointment: ${name} - ${date}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">New Appointment Request</h2>
          <p><strong>Patient Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time Slot:</strong> ${slot}</p>
          <p><strong>Reason for Visit:</strong> ${reason || 'Not specified'}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This is an automated notification from your clinic website.</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
