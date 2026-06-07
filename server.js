const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const getEmailTemplate = (name, email, message) => {
    const date = new Date().toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
    });

    const initial = name.charAt(0).toUpperCase();
    const firstName = name.split(' ')[0];
    const replyBody = encodeURIComponent(`\n\n\n──────────────────\nOriginal message from ${name} (${email}):\n\n${message}`);
    const replySubject = encodeURIComponent(`Re: Your Portfolio Inquiry`);

    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Portfolio Message</title>
</head>
<body style="margin:0; padding:0; width:100%; background-color:#0f172a; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">

    <!-- Outer Dark Wrapper -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0f172a;">
        <tr>
            <td align="center" style="padding:30px 15px;">

                <!-- Logo / Brand -->
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td align="center" style="padding-bottom:24px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="background:linear-gradient(135deg,#2563eb,#3b82f6); width:44px; height:44px; border-radius:12px; text-align:center; vertical-align:middle;">
                                        <span style="color:#ffffff; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:18px; font-weight:800;">&lt;/&gt;</span>
                                    </td>
                                    <td style="padding-left:12px;">
                                        <span style="color:#ffffff; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:18px; font-weight:700; letter-spacing:-0.3px;">Sushil Yadav</span>
                                        <br/>
                                        <span style="color:#64748b; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:11px; letter-spacing:1.5px; text-transform:uppercase;">Portfolio Notification</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>

                <!-- Main Card -->
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#1e293b; border-radius:20px; overflow:hidden; border:1px solid #334155;">

                    <!-- Blue Accent Top Bar -->
                    <tr>
                        <td style="height:4px; background:linear-gradient(90deg,#2563eb,#3b82f6,#60a5fa,#3b82f6,#2563eb); font-size:0; line-height:0;">&nbsp;</td>
                    </tr>

                    <!-- Header Section -->
                    <tr>
                        <td style="padding:36px 40px 24px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td>
                                        <span style="display:inline-block; background:rgba(37,99,235,0.15); color:#60a5fa; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:2px; padding:6px 14px; border-radius:20px; border:1px solid rgba(96,165,250,0.25);">New Message</span>
                                    </td>
                                    <td align="right">
                                        <span style="color:#64748b; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:12px;">${date}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding-top:16px;">
                                        <h1 style="margin:0; color:#f1f5f9; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:26px; font-weight:700; letter-spacing:-0.5px; line-height:1.3;">
                                            Someone reached out<br/>through your portfolio
                                        </h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Divider -->
                    <tr>
                        <td style="padding:0 40px;">
                            <div style="height:1px; background:linear-gradient(90deg, transparent, #334155, transparent);"></div>
                        </td>
                    </tr>

                    <!-- Sender Profile Card -->
                    <tr>
                        <td style="padding:24px 40px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0f172a; border-radius:14px; border:1px solid #334155;">
                                <tr>
                                    <td style="padding:24px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <!-- Avatar -->
                                                <td width="56" valign="top">
                                                    <div style="width:56px; height:56px; border-radius:16px; background:linear-gradient(135deg,#2563eb,#60a5fa); text-align:center; line-height:56px;">
                                                        <span style="color:#ffffff; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:24px; font-weight:700;">${initial}</span>
                                                    </div>
                                                </td>
                                                <!-- Info -->
                                                <td style="padding-left:18px;" valign="middle">
                                                    <p style="margin:0; color:#f1f5f9; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:18px; font-weight:700; line-height:1.3;">${name}</p>
                                                    <p style="margin:4px 0 0; font-size:0;">
                                                        <a href="mailto:${email}" style="color:#60a5fa; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:14px; text-decoration:none;">${email}</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Message Content -->
                    <tr>
                        <td style="padding:0 40px 28px;">
                            <p style="margin:0 0 10px; color:#64748b; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:2px;">Their Message</p>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0f172a; border-radius:14px; border:1px solid #334155;">
                                <tr>
                                    <td width="4" style="background:linear-gradient(180deg,#2563eb,#60a5fa); border-radius:14px 0 0 14px;"></td>
                                    <td style="padding:24px 28px;">
                                        <p style="margin:0; color:#cbd5e1; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:15px; line-height:1.8; white-space:pre-wrap;">${message}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- CTA Buttons -->
                    <tr>
                        <td style="padding:0 40px 32px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <!-- Reply Button -->
                                    <td align="center" style="padding-right:8px;" width="50%">
                                        <a href="mailto:${email}?subject=${replySubject}&body=${replyBody}"
                                           style="display:block; background:linear-gradient(135deg,#2563eb,#3b82f6); color:#ffffff; text-decoration:none; padding:16px 20px; border-radius:12px; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:14px; font-weight:600; text-align:center; letter-spacing:0.3px;">
                                            &#9993;&nbsp;&nbsp;Reply to ${firstName}
                                        </a>
                                    </td>
                                    <!-- WhatsApp Button -->
                                    <td align="center" style="padding-left:8px;" width="50%">
                                        <a href="https://wa.me/917666718264?text=Hi%20Sushil%2C%20I%20got%20your%20portfolio%20message%20from%20${encodeURIComponent(name)}"
                                           style="display:block; background:#0f172a; color:#e2e8f0; text-decoration:none; padding:16px 20px; border-radius:12px; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:14px; font-weight:600; text-align:center; border:1px solid #334155;">
                                            &#128172;&nbsp;&nbsp;Open WhatsApp
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Stats Bar -->
                    <tr>
                        <td style="padding:0 40px 28px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0f172a; border-radius:12px; border:1px solid #334155;">
                                <tr>
                                    <td width="33%" style="padding:18px; text-align:center; border-right:1px solid #334155;">
                                        <p style="margin:0; color:#64748b; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:10px; text-transform:uppercase; letter-spacing:1.5px;">Source</p>
                                        <p style="margin:4px 0 0; color:#60a5fa; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; font-weight:700;">Portfolio</p>
                                    </td>
                                    <td width="34%" style="padding:18px; text-align:center; border-right:1px solid #334155;">
                                        <p style="margin:0; color:#64748b; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:10px; text-transform:uppercase; letter-spacing:1.5px;">Priority</p>
                                        <p style="margin:4px 0 0; color:#4ade80; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; font-weight:700;">&#9679; New Lead</p>
                                    </td>
                                    <td width="33%" style="padding:18px; text-align:center;">
                                        <p style="margin:0; color:#64748b; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:10px; text-transform:uppercase; letter-spacing:1.5px;">Reply To</p>
                                        <p style="margin:4px 0 0; color:#60a5fa; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; font-weight:700;">${firstName}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Bottom Accent Bar -->
                    <tr>
                        <td style="height:4px; background:linear-gradient(90deg,#2563eb,#3b82f6,#60a5fa,#3b82f6,#2563eb); font-size:0; line-height:0;">&nbsp;</td>
                    </tr>
                </table>

                <!-- Footer -->
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td align="center" style="padding:24px 40px;">
                            <p style="margin:0 0 8px; color:#475569; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:12px;">
                                This email was sent from your
                                <a href="https://sushil7397.github.io/Portfolio" style="color:#60a5fa; text-decoration:none; font-weight:600;">Portfolio Contact Form</a>
                            </p>
                            <p style="margin:0; color:#334155; font-family:'Segoe UI',Roboto,Arial,sans-serif; font-size:11px;">
                                Sushil Yadav &middot; Full Stack Developer &middot; Mumbai, India
                            </p>
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

</body>
</html>`;
};

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Portfolio: New message from ${name}`,
        html: getEmailTemplate(name, email, message),
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
