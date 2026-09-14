"use client";

import { useState } from "react";
import { BUSINESS_EMAIL, BUSINESS_PHONE_LINK, BUSINESS_MAP_URL, createMailtoUrl } from "@/lib/business";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Navigation,
  Sparkles,
  Car,
} from "lucide-react";

export default function ContactPageContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = createMailtoUrl(`Contact inquiry: ${formState.subject}`, [
      "New website contact inquiry",
      "",
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      `Phone: ${formState.phone || "Not provided"}`,
      `Topic: ${formState.subject}`,
      "",
      "Message:",
      formState.message,
    ]);
  };

  return (
    <div className="w-full bg-brand-paper">
      {/* 1. Clean Header Banner */}
      <section className="bg-brand-cream border-b border-brand-line py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbf8f2] border border-brand-line text-xs font-semibold text-brand-green mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Colonia, NJ &bull; Walk-Ins Welcome</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-brand-green font-normal tracking-tight mb-4">
            Contact Estime&apos;s Café
          </h1>

          <p className="font-serif text-base sm:text-lg text-brand-muted max-w-xl mx-auto leading-relaxed">
            Have a question, feedback, or need info about group dining or catering?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. Main 2-Column Contact Section */}
      <section className="py-12 sm:py-16 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-brand-line rounded-xl p-6 sm:p-8 shadow-xs">
              <h2 className="font-serif text-2xl text-brand-green font-normal mb-6 pb-3 border-b border-brand-line">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cream border border-brand-line flex items-center justify-center text-brand-green flex-shrink-0">
                    <Phone className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-muted block mb-0.5">
                      Phone &amp; Takeout Orders
                    </span>
                    <a
                      href={BUSINESS_PHONE_LINK}
                      className="font-serif text-lg font-bold text-brand-green hover:text-brand-gold transition-colors"
                    >
                      (732) 669-7581
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cream border border-brand-line flex items-center justify-center text-brand-green flex-shrink-0">
                    <Mail className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-muted block mb-0.5">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${BUSINESS_EMAIL}`}
                      className="font-serif text-sm font-bold text-brand-green hover:text-brand-gold transition-colors break-all"
                    >
                      {BUSINESS_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cream border border-brand-line flex items-center justify-center text-brand-green flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-muted block mb-0.5">
                      Location
                    </span>
                    <p className="font-serif text-sm text-brand-text">
                      238 Inman Avenue, Colonia, NJ 07067
                    </p>
                    <a
                      href={BUSINESS_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-gold hover:text-brand-green transition-colors mt-1"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Get Directions &rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-cream border border-brand-line flex items-center justify-center text-brand-green flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-muted block mb-1">
                      Operating Hours
                    </span>
                    <div className="font-serif text-xs text-brand-text space-y-1">
                      <div className="flex justify-between gap-4">
                        <span>Monday – Saturday:</span>
                        <span className="font-bold text-brand-green">8:00 AM – 3:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Sunday:</span>
                        <span className="font-bold text-brand-green">8:00 AM – 4:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Perks Pill */}
              <div className="mt-6 pt-5 border-t border-brand-line grid grid-cols-1 gap-3 text-xs font-serif text-[#48423c]">
                <div className="flex items-center gap-2 bg-brand-paper p-2.5 rounded-md border border-brand-line/60">
                  <Car className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span className="font-medium">Free On-Site Parking</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div id="location-map" className="bg-white border border-brand-line rounded-xl overflow-hidden shadow-xs h-60 w-full relative scroll-mt-24">
              <iframe
                title="Estime's Cafe Location Map"
                src="https://www.google.com/maps?q=Estime's+Caf%C3%A9,+238+Inman+Ave,+Colonia,+NJ+07067&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Column: Clean Simple Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-brand-line rounded-xl p-6 sm:p-10 shadow-xs">
              <div className="mb-6 pb-4 border-b border-brand-line">
                <h2 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal">
                  Send a Message
                </h2>
                <p className="font-serif text-xs sm:text-sm text-brand-muted mt-1">
                  Completing this form opens a pre-addressed email in your mail app.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1.5">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-brand-paper border border-brand-line rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green focus:bg-white text-brand-text"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1.5">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-brand-paper border border-brand-line rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green focus:bg-white text-brand-text"
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="(732) 555-0123"
                      className="w-full bg-brand-paper border border-brand-line rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green focus:bg-white text-brand-text"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1.5">
                      Topic / Subject
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-brand-paper border border-brand-line rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green focus:bg-white text-brand-text"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Group / Large Table Inquiry">Group / Large Party (6+)</option>
                      <option value="Catering Question">Catering Question</option>
                      <option value="Menu Question">Menu Question</option>
                      <option value="Feedback / Experience">Feedback / Experience</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1.5">
                    Your Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    className="w-full bg-brand-paper border border-brand-line rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-green focus:bg-white text-brand-text leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-brand-green text-white font-sans text-sm font-bold uppercase tracking-wider rounded-md hover:bg-brand-green-dark transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4 text-brand-gold" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
