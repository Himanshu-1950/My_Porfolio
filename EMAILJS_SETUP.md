# EmailJS Setup Guide

## Solution: EmailJS (Frontend-only - No Backend Required!)

### Step 1: Get EmailJS Credentials

1. Go to https://www.emailjs.com/ and sign up for a free account
2. Click "Email Services" → "Add New Service" (e.g., Gmail) → Connect Gmail
3. Click "Email Templates" → "Create New Template"
4. Design your email template with these exact variable names:
   - `{{name}}` - Sender's name (matches input name="name")
   - `{{email}}` - Sender's email (matches input name="email")
   - `{{message}}` - Message content (matches textarea name="message")

Example template:
```
New Contact Form Submission

Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

5. Save the template

### Step 2: Get Your Credentials

From EmailJS dashboard:
- **Service ID**: From Email Services (e.g., `service_xxxxx`)
- **Template ID**: From Email Templates (e.g., `template_xxxxx`)
- **Public Key**: From Account > API Keys (e.g., `xxxxxxxx-xxxx-xxxx`)

### Step 3: Update Contact.jsx

Replace these placeholder values in `src/components/Contact.jsx`:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id';     // e.g., service_abc123
const EMAILJS_TEMPLATE_ID = 'your_template_id';   // e.g., template_xyz789
const EMAILJS_PUBLIC_KEY = 'your_public_key';     // e.g., publicKey_abc123
```

### Step 4: Test

1. Fill out the contact form
2. Open browser console (F12) to see debug info
3. Click send - you should receive an email!

## Important Notes:

✅ Use `sendForm` method - sends entire form automatically
✅ Template variables MUST match input `name` attributes: `name`, `email`, `message`
✅ Check browser console for specific error messages
✅ Make sure Gmail service shows "Active" status

## Troubleshooting:

If error says "The public key is invalid" → Wrong Public Key
If error says "Service not found" → Wrong Service ID  
If error says "Template not found" → Wrong Template ID

