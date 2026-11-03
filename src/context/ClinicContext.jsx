import React, { createContext, useContext, useState, useEffect } from 'react';
import { PATIENT_REVIEWS } from '../data/clinicData.js';

const ClinicContext = createContext(null);

const STORAGE_KEYS = {
  APPOINTMENTS: 'physiocare_user_appointments',
  SAVED_ITEMS: 'physiocare_saved_items',
  REVIEWS: 'physiocare_custom_reviews',
  PAIN_HISTORY: 'physiocare_pain_history',
  RECENT_ITEMS: 'physiocare_recently_viewed',
  INQUIRIES: 'physiocare_inquiries'
};

const DEFAULT_APPOINTMENTS = [
  {
    id: "APT-8821",
    patientName: "Aman Kumar",
    phone: "+91 98765 43210",
    email: "aman@example.com",
    serviceId: "chiropractic-adjustments",
    serviceTitle: "Chiropractic Care & Spine Adjustments",
    doctor: "Dr. Amit Jangir",
    visitType: "Clinic Visit",
    date: "2026-11-10",
    timeSlot: "11:30 AM",
    status: "Confirmed",
    notes: "Suffering from mild lower back stiffness after long office hours.",
    createdAt: new Date().toISOString()
  }
];

export function ClinicProvider({ children }) {
  // 1. Appointments
  const [appointments, setAppointments] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return DEFAULT_APPOINTMENTS;
    } catch (e) {
      console.warn("Error reading appointments from localStorage", e);
      return DEFAULT_APPOINTMENTS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
    } catch (e) {
      console.warn("Error saving appointments to localStorage", e);
    }
  }, [appointments]);

  // 2. Saved / Bookmarked items
  const [savedItems, setSavedItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SAVED_ITEMS);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SAVED_ITEMS, JSON.stringify(savedItems));
    } catch (e) {
      console.warn("Error saving bookmarks", e);
    }
  }, [savedItems]);

  // 3. User reviews
  const [userReviews, setUserReviews] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      return stored ? JSON.parse(stored) : PATIENT_REVIEWS;
    } catch (e) {
      return PATIENT_REVIEWS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(userReviews));
    } catch (e) {
      console.warn("Error saving reviews", e);
    }
  }, [userReviews]);

  // 4. Pain assessment history
  const [painHistory, setPainHistory] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PAIN_HISTORY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PAIN_HISTORY, JSON.stringify(painHistory));
    } catch (e) {
      console.warn("Error saving pain history", e);
    }
  }, [painHistory]);

  // 5. Recently viewed
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.RECENT_ITEMS);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RECENT_ITEMS, JSON.stringify(recentlyViewed));
    } catch (e) {
      console.warn("Error saving recently viewed", e);
    }
  }, [recentlyViewed]);

  // 6. Toasts
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Actions
  const bookAppointment = (data) => {
    const newAppointment = {
      id: `APT-${Math.floor(1000 + Math.random() * 9000)}`,
      status: "Confirmed",
      createdAt: new Date().toISOString(),
      ...data
    };
    setAppointments(prev => [newAppointment, ...prev]);
    showToast(`Appointment confirmed! Reference ID: ${newAppointment.id}`, 'success');
    return newAppointment;
  };

  const cancelAppointment = (id) => {
    setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, status: "Cancelled" } : apt));
    showToast(`Appointment ${id} has been cancelled.`, 'info');
  };

  const rescheduleAppointment = (id, newDate, newTime) => {
    setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, date: newDate, timeSlot: newTime, status: "Rescheduled" } : apt));
    showToast(`Appointment ${id} rescheduled to ${newDate} at ${newTime}.`, 'success');
  };

  const toggleSaveItem = (item) => {
    setSavedItems(prev => {
      const exists = prev.some(i => i.id === item.id);
      if (exists) {
        showToast(`Removed from saved items`, 'info');
        return prev.filter(i => i.id !== item.id);
      } else {
        showToast(`Saved to your favorites`, 'success');
        return [item, ...prev];
      }
    });
  };

  const isItemSaved = (id) => {
    return savedItems.some(i => i.id === id);
  };

  const addReview = (reviewData) => {
    const newRev = {
      id: `rev-${Date.now()}`,
      date: "Just now",
      verified: true,
      ...reviewData
    };
    setUserReviews(prev => [newRev, ...prev]);
    showToast("Thank you for sharing your recovery feedback!", 'success');
    return newRev;
  };

  const savePainAssessment = (assessment) => {
    const record = {
      id: `pain-${Date.now()}`,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      ...assessment
    };
    setPainHistory(prev => [record, ...prev]);
    return record;
  };

  const recordRecentView = (item) => {
    if (!item || !item.id) return;
    setRecentlyViewed(prev => {
      const filtered = prev.filter(i => i.id !== item.id);
      return [item, ...filtered].slice(0, 8);
    });
  };

  const submitContactInquiry = (inquiry) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      const list = stored ? JSON.parse(stored) : [];
      list.unshift({ id: `inq-${Date.now()}`, ...inquiry, date: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(list));
    } catch (e) {
      console.warn("Error storing inquiry", e);
    }
    showToast("Your message has been received! Our clinic desk will call you shortly.", 'success');
  };

  return (
    <ClinicContext.Provider
      value={{
        appointments,
        bookAppointment,
        cancelAppointment,
        rescheduleAppointment,
        savedItems,
        toggleSaveItem,
        isItemSaved,
        userReviews,
        addReview,
        painHistory,
        savePainAssessment,
        recentlyViewed,
        recordRecentView,
        submitContactInquiry,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
}

export function useClinic() {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error("useClinic must be used within a ClinicProvider");
  }
  return context;
}
