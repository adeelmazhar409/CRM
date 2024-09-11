// +server.js

import { sendEmail } from '$lib/emailService';

export async function POST({ request }) {
    const { email, code, staffName } = await request.json();

    try {
        await sendEmail(email, code, staffName);
        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response('Failed to send email', { status: 500 });
    }
}
