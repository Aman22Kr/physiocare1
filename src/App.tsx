/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ClinicProvider } from './context/ClinicContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ServiceDetailPage from './pages/ServiceDetailPage.jsx';
import ConditionsPage from './pages/ConditionsPage.jsx';
import SymptomCheckerPage from './pages/SymptomCheckerPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BookAppointmentPage from './pages/BookAppointmentPage.jsx';
import MyAppointmentsPage from './pages/MyAppointmentsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <ClinicProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/conditions" element={<ConditionsPage />} />
              <Route path="/symptom-checker" element={<SymptomCheckerPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/book" element={<BookAppointmentPage />} />
              <Route path="/my-appointments" element={<MyAppointmentsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </div>
      </HashRouter>
    </ClinicProvider>
  );
}
