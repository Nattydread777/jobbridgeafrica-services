# Custom Domain Email Setup (info@jobbridgeafrica.com)

This guide walks you through setting up a professional email (info@jobbridgeafrica.com) and wiring it to the app's contact form.

## 1) Choose an Email Provider

Popular choices:

- Google Workspace (paid)
- Microsoft 365 (paid)
- Zoho Mail (free tier available)

Recommendation: Zoho Mail is cost-effective for a single mailbox; Google Workspace for team collaboration.

## 2) Add Your Domain to the Provider

- Sign up with your chosen provider.
- Add the domain `jobbridgeafrica.com`.
- Complete domain ownership verification (usually via TXT DNS record).

## 3) Configure DNS Records (at your DNS host/registrar)

Create/verify the following records:

- MX (mail delivery):
  - For Zoho example:
    - `@  MX  10 mx.zoho.com`
    - `@  MX  20 mx2.zoho.com`
    - `@  MX  50 mx3.zoho.com`
- SPF (authorize sending servers):
  - `@  TXT  v=spf1 include:zoho.com ~all`
- DKIM (sign outgoing mail):
  - Add CNAME per provider’s instructions (e.g., `zselector._domainkey` -> DKIM target).
- DMARC (enforce policy + reporting):
  - `_dmarc  TXT  v=DMARC1; p=none; rua=mailto:dmarc@jobbridgeafrica.com; fo=1`
  - After monitoring, consider `p=quarantine` or `p=reject`.

Propagation can take 15 minutes to 48 hours. Use MXToolbox to verify records.

## 4) Create the Mailbox

- Create the mailbox `info@jobbridgeafrica.com` in the provider admin console.
- Set a strong password and recovery.

## 5) Wire Up App Contact Form (Backend SMTP)

The backend contact route uses Nodemailer. Configure SMTP env vars in `backend/.env` and Render:

- `SMTP_HOST` (e.g., `smtp.zoho.com`)
- `SMTP_PORT` (e.g., `465` for SSL or `587` for STARTTLS)
- `SMTP_SECURE` (`true` for 465, `false` for 587)
- `SMTP_USER` (`info@jobbridgeafrica.com`)
- `SMTP_PASS` (app-specific password if required)
- `CONTACT_TO_EMAIL` (where inquiries are delivered; can be same as SMTP_USER)

Example for Zoho (SSL):

```
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@jobbridgeafrica.com
SMTP_PASS=your_app_password
CONTACT_TO_EMAIL=info@jobbridgeafrica.com
```

Restart the backend after updating environment variables.

## 6) Test End-to-End

- Submit the Contact form locally and in staging/production.
- Check the mailbox receives messages.
- Verify SPF/DKIM/DMARC alignment using Gmail headers or mail-tester.com.

## 7) Optional: Forwarding + Aliases

- Create aliases like `support@jobbridgeafrica.com` or `sales@jobbridgeafrica.com`.
- Set up forwarding to team members as needed.

## 8) Security Best Practices

- Use app passwords for SMTP where possible.
- Rotate credentials periodically.
- Enforce MFA on the email admin account.
- Monitor DMARC reports for spoofing attempts.
