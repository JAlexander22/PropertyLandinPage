Property Landing Page

A modern luxury real estate landing page built with React, Tailwind CSS, and Google Analytics 4 event tracking.

Overview

This project was created as a frontend portfolio piece focused on:

responsive UI design
React component architecture
user interaction tracking
marketing analytics integration
CTA and lead engagement tracking

The website simulates a premium real estate platform where users can:

browse featured properties
view property details in a modal
submit enquiries
interact with CTA buttons
generate analytics events for marketing analysis
Features
Frontend Features
Responsive property grid layout
Interactive property modal
Smooth scrolling navigation
Property enquiry form
Dynamic property interest selection
Hover animations and transitions
Tailwind CSS styling
Marketing Analytics Features

Integrated with Google Analytics 4 (GA4) to track:

CTA button clicks
Property engagement
Enquiry form submissions
Property interest interactions

Tracked Events:

enquire_now_clicked
form_submitted
Tech Stack
React
Vite
Tailwind CSS
React Icons
Google Analytics 4
React GA4
Installation

Clone the repository:

git clone https://github.com/JAlexander22/PropertyLandinPage.git

Navigate into the project:

cd PropertyLandinPage

Install dependencies:

npm install

Run the development server:

npm run dev
Google Analytics Setup

Create a GA4 property in Google Analytics and replace the measurement ID inside:

src/analytics.js

Example:

ReactGA.initialize("G-XXXXXXXXXX");
Project Structure
src/
│
├── components/
│   ├── Contact.jsx
│   ├── EnquiryForm.jsx
│   ├── FeaturedProperties.jsx
│   ├── Footer.jsx
│   ├── Home.jsx
│   └── PropertyModal.jsx
│
├── analytics.js
├── properties.js
├── App.jsx
└── main.jsx
Future Improvements

Potential future enhancements:

Property search and filtering
Favourite/save property functionality
Backend/API integration
Database lead storage
Authentication system
Admin dashboard
Advanced analytics dashboards
Framer Motion animations
Purpose

This project was also designed to support marketing analytics portfolio work by generating realistic user interaction data for Google Analytics reporting and behavioural analysis.