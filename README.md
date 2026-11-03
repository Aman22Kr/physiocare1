# PhysioCare - Advanced Physiotherapy & Chiropractic Clinic

A modern, responsive, multi-page web application for **PhysioCare**, recreated from the accessible clinical reference website [https://dramitjangir.com/](https://dramitjangir.com/) (Dr. Amit Jangir, Lead Physiotherapist & Chiropractor, Dadar West, Mumbai).

The application has been transformed under the brand identity **physiocare**, featuring complete client-side routing, interactive clinical triage and pain assessment tools, appointment booking with browser persistence, YouTube video placeholder layout preservation, unobtrusive advertisement slots, and an automated GitHub Actions deployment workflow for GitHub Pages.

---

## 1. What the Website Does

**PhysioCare** serves as the digital clinic portal for Dr. Amit Jangir's advanced physical therapy and chiropractic rehabilitation practice in Dadar West, Mumbai (directly opposite Shiv Sena Bhavan). The application enables patients to:
- Explore evidence-based non-surgical therapies (Chiropractic Adjustments, Slip Disc Decompression, Trigger Point Dry Needling, Cupping Therapy, Neuro-Rehab, Sports Injury Recovery, Post-Surgical Care, and Home Visits).
- Search and filter clinical conditions (L4-L5 herniated disc, sciatica, cervical spondylosis, frozen shoulder, knee osteoarthritis, plantar fasciitis).
- Conduct an interactive step-by-step **Pain & Symptom Assessment** using the Visual Analogue Scale (VAS) with red-flag safety screening.
- Reserve in-clinic or home-visit consultations with preferred time slots, saved directly to browser `localStorage`.
- Manage, reschedule, cancel, or print official appointment confirmation slips via the **Patient Portal**.
- Read verified patient reviews, submit custom recovery stories, and browse educational health blogs.
- View clinic facilities and clinical video case studies with YouTube placeholders adhering to aspect ratios.

---

## 2. Reference Website & Brand Identity

| Detail | Specification |
| :--- | :--- |
| **Reference Website** | [https://dramitjangir.com/](https://dramitjangir.com/) (Dr. Amit Jangir Practice) |
| **New Brand Name** | **physiocare** (PhysioCare Clinic) |
| **Lead Practitioner** | Dr. Amit Jangir (BPT, MPT Musculoskeletal, MIAP, Certified Chiropractor & Dry Needling Specialist) |
| **Clinic Location** | Room No. 02, Jogalekar Building, Dadasaheb Rege Marg, Opposite Shiv Sena Bhavan, Dadar West, Mumbai, MH - 400028 |
| **Contact Desk** | +91 93728 73293 / +91 82918 41098 |
| **GitHub Username** | **Aman22kr** |
| **Repository Deployment** | GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) |

---

## 3. Main Pages & Implemented Features

1. **Homepage (`#/`)**:
   - High-impact hero section with immediate appointment CTA, emergency hotline, and key trust metrics (15+ Years, 12,000+ Patients, 98.4% Recovery Rate).
   - Quick in-hero consultation scheduler (Clinic Visit vs. Home Visit).
   - Core treatment cards linking directly to detail pages.
   - Interactive anatomical condition filter (Spine, Neck, Shoulder, Knee, Foot).
   - Meet Dr. Amit Jangir showcase and clinical philosophy.
   - Clinical video case studies with blank YouTube placeholders.
   - Verified patient review snippets and FAQ accordion.
   - Reusable compact advertisement placeholder.

2. **About Page (`#/about`)**:
   - Detailed biography of Dr. Amit Jangir, qualifications (BPT, MPT, MIAP), and clinical heritage.
   - Senior clinical multidisciplinary team (Neuro, Sports, Ergonomics specialists).
   - Non-surgical philosophy and root-cause diagnostic protocols.

3. **Treatments Catalog (`#/services`)**:
   - Full listing of all 9 specialized clinical therapies.
   - Real-time search filter and category tabs (Spine Care, Specialized, Sports, Neuro, Home Care).
   - One-click bookmarking of treatments to local storage.

4. **Dynamic Treatment Detail Page (`#/services/:serviceId`)**:
   - Dynamic slug route (`chiropractic-adjustments`, `spinal-rehabilitation-slip-disc`, `cupping-therapy-hijama`, `dry-needling-therapy`, etc.).
   - In-depth medical descriptions, procedure steps (1-4), clinical benefits, contraindications, and therapy FAQs.
   - Sticky direct-booking sidebar and recent-views tracking.

5. **Conditions Reference (`#/conditions`)**:
   - Comprehensive clinical dossier of spinal, joint, and nerve disorders.
   - Symptoms, diagnostic signs, treatment protocol, and doctor-prescribed home rehabilitation exercises.

6. **Interactive Symptom Checker (`#/symptom-checker`)**:
   - 4-step clinical triage: Affected body region, VAS pain slider (1-10), symptom characteristics, duration, and red-flag screening.
   - Instant preliminary diagnosis, recommended therapy, safe self-care guidance, and one-click booking pre-fill.
   - Stored assessment history in `localStorage`.

7. **Clinic Tour & Gallery (`#/gallery`)**:
   - Filterable high-definition photographic gallery of treatment suites, computerized traction unit, and electrotherapy machines.
   - Modal lightbox photo preview and video tour placeholders.

8. **Patient Reviews (`#/reviews`)**:
   - Star rating distribution (4.9 / 5 across 850+ reviews).
   - Filter by star rating and condition treated.
   - Interactive modal form allowing patients to submit their own recovery story with automatic persistence in `localStorage`.

9. **Health & Spine Blog (`#/blog`)**:
   - Medical articles on slip disc myths, tech-neck posture ergonomics, and dry needling vs. acupuncture.
   - Search bar and full article reader modal.

10. **Book Appointment (`#/book`)**:
    - 3-step booking wizard: Service & Mode -> Specialist & Time Slot -> Patient Details.
    - Generates unique reference code (e.g., `APT-8821`), saves to `localStorage`, and renders a printable confirmation slip.

11. **My Appointments Portal (`#/my-appointments`)**:
    - View all scheduled, rescheduled, and cancelled consultations on this device.
    - Interactive reschedule modal and cancellation controls.
    - Quick access to bookmarked therapies and print slip button.

12. **Contact & Location (`#/contact`)**:
    - Complete address opposite Shiv Sena Bhavan, Dadar West.
    - Transit directions from Dadar Central & Western Railway Station.
    - Interactive map visual, direct WhatsApp click-to-chat, and inquiry form.

13. **Custom 404 Page (`*`)**:
    - Graceful error recovery with direct shortcuts back to Home, Services, and Booking.

---

## 4. Project Structure

```
physiocare/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Authoritative GitHub Actions workflow for GitHub Pages
├── public/
├── src/
│   ├── components/
│   │   ├── AdPlaceholder.jsx   # Compact, unobtrusive advertising placeholder
│   │   ├── Footer.jsx          # Rich clinical footer with legal & transit info
│   │   ├── Navbar.jsx          # Responsive header with drawer & badges
│   │   ├── ScrollToTop.jsx     # HashRouter page transition scroll reset
│   │   ├── Toast.jsx           # Dismissible feedback alerts
│   │   └── YouTubePlaceholder.jsx # 16:9 blank video player placeholder
│   ├── context/
│   │   └── ClinicContext.jsx   # LocalStorage persistence & global state
│   ├── data/
│   │   └── clinicData.js       # Complete clinical mock data layer
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BookAppointmentPage.jsx
│   │   ├── ConditionsPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── MyAppointmentsPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ReviewsPage.jsx
│   │   ├── ServiceDetailPage.jsx
│   │   ├── ServicesPage.jsx
│   │   └── SymptomCheckerPage.jsx
│   ├── App.tsx                 # Root application with HashRouter
│   ├── index.css               # Tailwind CSS v4 setup & custom utilities
│   └── main.tsx                # Entry point
├── .gitignore
├── index.html                  # HTML entry point with meta tags & SEO
├── metadata.json
├── package.json
├── package-lock.json           # Mandatory committed npm lockfile
├── tsconfig.json
├── vite.config.ts              # Vite config with base: './'
└── README.md                   # Complete documentation
```

---

## 5. Prerequisites & Compatibility

- **Node.js**: `v20.x` or `v22.x` (LTS recommended).
- **npm**: `v10.x` or higher.
- Modern web browser (Chrome, Edge, Safari, Firefox) with JavaScript and LocalStorage enabled.

---

## 6. How to Install Dependencies

To install all required packages using the committed `package-lock.json`:

```bash
npm ci
```

If making modifications or updating packages:

```bash
npm install
```

---

## 7. How to Run the Development Server

Start the local Vite development server:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 8. How to Generate and Preview the Production Build

1. **Build the static bundle** (outputs to `/dist` with relative paths via `base: './'`):
   ```bash
   npm run build
   ```

2. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 9. LocalStorage Persistence & Limitations

The application uses standard browser `localStorage` for client-side state:
- `physiocare_user_appointments`: Stores appointment bookings, reschedule updates, and cancellations.
- `physiocare_saved_items`: Stores user-bookmarked services and clinical guides.
- `physiocare_custom_reviews`: Stores patient feedback submitted via the Reviews form.
- `physiocare_pain_history`: Stores self-assessments completed in the Symptom Checker.
- `physiocare_recently_viewed`: Stores recently viewed services for quick recall.
- `physiocare_inquiries`: Stores contact inquiry form messages.

### Important Notice & Limitations:
- **Local to Device**: Data is stored exclusively in the specific browser and device being used. It does not synchronize across separate devices.
- **Cache Clearing**: Clearing your browser cache or opening in Incognito mode will reset the data to default clinical demonstration records.
- **Privacy Safe**: No sensitive medical records, passwords, or payment credentials are stored in `localStorage`.

---

## 10. How to Configure the GitHub Repository & Username

1. Create a new repository on your GitHub account (`https://github.com/Aman22kr/physiocare`).
2. Add the remote URL locally:
   ```bash
   git remote add origin https://github.com/Aman22kr/physiocare.git
   git branch -M main
   ```

---

## 11. How to Enable GitHub Pages Using GitHub Actions

To host the site for free using GitHub Pages:
1. Navigate to your repository on GitHub: `https://github.com/Aman22kr/physiocare`.
2. Click on **Settings** > **Pages** in the left sidebar.
3. Under **Build and deployment** > **Source**, select **GitHub Actions** (do NOT select "Deploy from a branch").
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the site.

---

## 12. How to Push Changes & Trigger Automatic Deployment

Whenever you commit and push to the `main` branch, GitHub Actions automatically builds and deploys your site:

```bash
git add .
git commit -m "feat: complete physiocare clinic application"
git push -u origin main
```

You can monitor deployment progress under the **Actions** tab on your GitHub repository. Once complete, your site will be live at:
```
https://Aman22kr.github.io/physiocare/
```

---

## 13. Troubleshooting Common Deployment Problems

- **404 on Page Refresh**:
  - The application strictly uses `HashRouter` (`/#/services`, `/#/book`). Hash routes resolve client-side and never cause 404 errors on GitHub Pages.
- **Assets Not Loading / Broken Images**:
  - `vite.config.ts` includes `base: './'`. This ensures all CSS and JS bundles resolve relative to the repository path rather than domain root.
- **GitHub Actions Build Failure**:
  - Ensure `package-lock.json` is committed to git (`git status` should not show `package-lock.json` as untracked).
  - Check that Node.js version is set to 22 in `.github/workflows/deploy.yml`.

---

## 14. How to Change Brand Name, Content & Theme

- **Brand Name & Clinic Information**: Edit `src/data/clinicData.js`. Updating `CLINIC_INFO.name` or `CLINIC_INFO.address` automatically updates the Navbar, Footer, Booking forms, and appointment slips.
- **Colors & Accents**: Tailwind classes use `teal-600` for primary medical accents and `slate-900` for deep clinical contrast. You can find-and-replace `teal` with `cyan`, `blue`, or `emerald` as desired.
- **Doctor Profile**: Modify `CLINIC_INFO.doctorName`, qualifications, and `CLINIC_TEAM` in `src/data/clinicData.js`.

---

## 15. Reusing This Project For Another Website

To repurpose this code for another medical clinic or healthcare business:
1. Update `CLINIC_INFO` in `src/data/clinicData.js` with new doctor names, phone numbers, and addresses.
2. Update `SERVICES` and `CONDITIONS` arrays with the new specialty's treatments (e.g., Dental, Dermatology, Orthopedic).
3. Replace image URLs with high-quality photographs matching your new field.
4. Update repository settings in `.github/workflows/deploy.yml` and push to GitHub.

---

## 16. Mock Implementations & Remaining Limitations

- **Backend / Database**: This version operates completely client-side. Bookings are persisted in `localStorage` rather than an external SQL/NoSQL database.
- **Payment Processing**: No live payment gateway (Razorpay/Stripe) is connected; appointments are marked "Confirmed" with pay-at-clinic or UPI-on-arrival terms.
- **SMS / WhatsApp API**: The WhatsApp buttons generate direct URL click-to-chat links with pre-filled messages; automated SMS gateways are simulated.
- **Video Players**: Clinical video areas strictly utilize blank placeholders preserving 16:9 layout and dimensions as instructed, preventing third-party tracking.

---

## License

Created for demonstration and portfolio deployment by **Aman22kr**.
All rights reserved under the Apache-2.0 License.
