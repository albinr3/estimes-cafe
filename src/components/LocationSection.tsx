import { MapPin, Phone, Clock, Navigation, Car, Utensils, Camera } from "lucide-react";
import { BUSINESS_MAP_URL, BUSINESS_GBP_PHOTOS_URL } from "@/lib/business";

export default function LocationSection() {
  return (
    <section id="location" className="py-16 sm:py-20 bg-[#f9f4eb] border-b border-brand-line">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Location Details & NAP Data */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
                Visit Us &bull; Colonia, NJ &bull; Inman Ave
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal leading-tight mb-6">
                Visit Our Breakfast &amp; Lunch Restaurant in Colonia, NJ (238 Inman Ave)
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                      Address
                    </p>
                    <p className="font-serif text-base text-[#48423c]">
                      238 Inman Avenue
                      <br />
                      Colonia, NJ 07067 (Woodbridge Township)
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <a
                        href={BUSINESS_MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-green hover:text-brand-gold transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Open in Google Maps &rarr;</span>
                      </a>
                      <span className="text-brand-line">&bull;</span>
                      <a
                        href={BUSINESS_GBP_PHOTOS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-brand-green transition-colors"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>See Photos on Google &rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                      Operating Hours
                    </p>
                    <div className="font-serif text-sm text-[#48423c] space-y-1">
                      <p className="flex justify-between gap-6">
                        <span>Monday – Saturday:</span>
                        <span className="font-bold text-brand-green">8:00 AM – 3:00 PM</span>
                      </p>
                      <p className="flex justify-between gap-6">
                        <span>Sunday:</span>
                        <span className="font-bold text-brand-green">8:00 AM – 4:00 PM</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                      Phone &amp; Orders
                    </p>
                    <a
                      href="tel:7326697581"
                      className="font-serif text-lg font-bold text-brand-green hover:text-brand-gold transition-colors block"
                    >
                      (732) 669-7581
                    </a>
                    <p className="font-serif text-xs text-brand-muted mt-0.5">
                      Call ahead for quick takeout &amp; party tray ordering.
                    </p>
                  </div>
                </div>

                {/* Proximity / Amenities */}
                <div className="p-4 bg-brand-paper border border-brand-line space-y-2 text-xs font-serif text-brand-muted">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-brand-gold" />
                    <span>Free on-site parking available for customers on Inman Ave.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-brand-gold" />
                    <span>Serving Colonia, Woodbridge, Clark, Rahway, Edison &amp; Westfield.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 h-[380px] sm:h-[450px] lg:h-full min-h-[380px] border border-brand-line relative overflow-hidden bg-brand-cream shadow-inner">
            <iframe
              title="Estime's Cafe Location on Google Maps"
              src="https://www.google.com/maps?q=Estime's+Caf%C3%A9,+238+Inman+Ave,+Colonia,+NJ+07067&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[105%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
