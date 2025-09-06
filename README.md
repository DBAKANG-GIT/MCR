# MCR Getaways - Property Management Website

A modern, responsive Next.js website for MCR Getaways, featuring premium animations, form submissions, and social media integration.

## 🚀 Features

### Core Functionality

- **Contact Form**: Powered by Formspree with real-time validation
- **Newsletter Subscription**: Mailchimp integration with error handling
- **WhatsApp Integration**: Floating contact button
- **Social Media Links**: Instagram, TikTok, Facebook, LinkedIn, WhatsApp
- **Privacy Policy**: Downloadable PDF document

### Design & UX

- **Premium Animations**: Glassmorphism, gradient effects, floating elements
- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations
- **Interactive Elements**: Hover effects, transitions, and toast notifications
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

### Technical Features

- **Next.js 15**: App router with TypeScript support
- **Tailwind CSS**: Custom animations and responsive utilities
- **React Toastify**: User feedback notifications
- **Playwright Testing**: Comprehensive E2E test coverage
- **Image Optimization**: Sharp integration for performance

## 🛠 Technology Stack

- **Framework**: Next.js 15.4.7
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Forms**: Formspree (contact), Mailchimp (newsletter)
- **Testing**: Playwright
- **Icons**: Lucide React
- **Notifications**: React Toastify

## 📁 Project Structure

```
MCR/
├── app/                          # Next.js app directory
│   ├── component/
│   │   └── layout/
│   │       ├── AppFooter.tsx     # Footer with social links & newsletter
│   │       ├── AppHeader.tsx     # Navigation header
│   │       ├── WhatsAppButton.tsx # Floating WhatsApp button
│   │       └── ...
│   ├── contact/page.tsx          # Contact form page
│   ├── about/page.tsx           # About page
│   ├── terms/page.tsx           # Terms & conditions
│   ├── policy/page.tsx          # Privacy policy page
│   └── layout.tsx               # Root layout
├── pages/api/                   # API routes
│   ├── subscribe.js             # Mailchimp newsletter API
│   └── zoho.ts                  # CRM integration (unused)
├── tests/                       # Playwright test files
│   ├── contact-form.spec.ts     # Contact form tests
│   ├── newsletter-subscription.spec.ts # Newsletter tests
│   ├── social-links-whatsapp.spec.ts  # Social & WhatsApp tests
│   └── ...
├── public/                      # Static assets
│   ├── MCR_Getaways_Privacy_Notice.pdf
│   └── socials/                 # Social media icons
└── playwright.config.ts         # Playwright configuration
```

## 🚀 Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables** (create `.env.local`):

   ```bash
   # Mailchimp (optional - for newsletter)
   NEXT_MAILCHIMP_API_KEY=your_api_key_here
   NEXT_MAILCHIMP_API_SERVER=us1
   NEXT_MAILCHIMP_AUDIENCE_ID=your_audience_id_here
   ```

3. **Run development server:**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📝 Form Configuration

### Contact Form (Formspree)

- **Service**: [Formspree](https://formspree.io)
- **Endpoint**: `https://formspree.io/f/xovnadej`
- **Target Email**: `info@mcrgetawaysltd.com`
- **Features**: Real-time validation, success/error feedback, form reset

### Newsletter Subscription (Mailchimp)

- **Service**: Mailchimp
- **API Endpoint**: `/api/subscribe`
- **Features**: Duplicate detection, loading states, error handling

## 🧪 Testing

Run comprehensive Playwright tests:

```bash
# Run all tests
npx playwright test

# Run specific test suite
npx playwright test tests/contact-form.spec.ts

# Run tests in headed mode (with browser UI)
npx playwright test --headed

# Generate test report
npx playwright show-report
```

### Test Coverage

- ✅ Contact form validation and submission
- ✅ Newsletter subscription flow
- ✅ WhatsApp button functionality
- ✅ Social media links verification
- ✅ Responsive design across devices
- ✅ Error handling and user feedback

## 📱 Social Media Integration

### Connected Accounts

- **Instagram**: [@mcr.getaways.ltd](https://www.instagram.com/mcr.getaways.ltd?igsh=MTd1YW5ramo2N25qag==)
- **TikTok**: [@mcr.getaways.ltd](https://www.tiktok.com/@mcr.getaways.ltd?_t=ZN-8z9EJWPRa4M&_r=1)
- **WhatsApp**: Direct contact via QR code
- **Facebook**: Placeholder (update with client's page)
- **LinkedIn**: Placeholder (update with client's page)

### WhatsApp Integration

- Floating button (bottom-left corner)
- Hover tooltip: "Send a message"
- Direct link to WhatsApp Business
- Responsive across all devices

## 🎨 Design System

### Colors

- Primary: Cyan-based palette (`#06b6d4`)
- Gradients: Premium multi-color gradients
- Background: White with glass morphism overlays

### Animations

- **Fade-in-up**: Entrance animations
- **Float**: Background element animations
- **Gradient**: Text color animations
- **Hover effects**: Interactive elements
- **Glass morphism**: Backdrop blur effects

### Typography

- **Font**: Plus Jakarta Sans
- **Weights**: 400, 500, 600, 700
- **Gradient text**: Premium headings
- **Responsive**: Scalable across devices

## 🔧 Build & Deployment

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Start production server:**

   ```bash
   npm start
   ```

3. **Image optimization:**
   ```bash
   npm run optimize:images
   ```

### Deployment Notes

- Images are optimized during build process
- Environment variables needed for newsletter functionality
- Privacy policy PDF is served from `/public` folder
- All external links open in new tabs with security attributes

## 📄 Environment Variables

### Required (Optional)

```bash
# Mailchimp Integration (Newsletter)
NEXT_MAILCHIMP_API_KEY=your_mailchimp_api_key
NEXT_MAILCHIMP_API_SERVER=us1  # or your datacenter
NEXT_MAILCHIMP_AUDIENCE_ID=your_audience_id

# Zoho CRM (Currently Unused)
ZOHO_DC=com
ZOHO_REFRESH_TOKEN=your_refresh_token
ZOHO_CLIENT_ID=your_client_id
ZOHO_CLIENT_SECRET=your_client_secret
```

**Note**: The contact form works without any environment variables (uses Formspree). Newsletter requires Mailchimp setup.

## 🆘 Troubleshooting

### Common Issues

1. **Contact form not submitting**

   - Check network connection
   - Verify Formspree endpoint is accessible
   - Check browser console for errors

2. **Newsletter subscription failing**

   - Ensure Mailchimp environment variables are set
   - Verify API key has proper permissions
   - Check audience/list ID is correct

3. **Tests failing**
   - Make sure development server is running
   - Check for strict mode violations (multiple elements)
   - Verify test selectors match current DOM structure

### Performance Optimization

- Images are automatically optimized with Sharp
- Tailwind CSS is purged in production
- Next.js handles code splitting automatically
- Use `npm run build` to analyze bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Run tests: `npx playwright test`
4. Ensure all tests pass
5. Submit a pull request

## 📞 Support

- **Email**: info@mcrgetawaysltd.com
- **WhatsApp**: Use floating button on website
- **Phone**: +44 7999 737846

## 📜 License

© 2025 MCR GETAWAYS - All rights reserved

---

Built with ❤️ using Next.js.
