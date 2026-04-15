"use client";

import { useState } from "react";
import PhotoUpload from "./photo-upload";

const STORE_NAME = "KRAVE Zamboanga";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/kravezamboanga/",
    color: "bg-[#1877F2] hover:bg-[#166FE5]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/krave_zamboanga/",
    color:
      "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@krave_zamboanga",
    color: "bg-black hover:bg-gray-800",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.16 8.16 0 005.58 2.2V11.7a4.85 4.85 0 01-3.77-1.85V6.69h3.77z" />
      </svg>
    ),
  },
  // {
  //   name: "Order on Messenger",
  //   href: "https://www.messenger.com/t/kravezamboanga",
  //   color: "bg-[#0084ff] hover:bg-[#0073e6]",
  //   icon: ( ... ),
  // },
];

export default function Home() {
  const [feedback, setFeedback] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleSendFeedback() {
    if (!feedback.trim()) return;
    const encoded = encodeURIComponent(
      `Feedback/Suggestion for ${STORE_NAME}:\n\n${feedback.trim()}`
    );
    window.open(
      `https://www.messenger.com/t/kravezamboanga?text=${encoded}`,
      "_blank"
    );
    setFeedbackSent(true);
    setFeedback("");
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <header className="bg-sakura text-white text-center py-12 px-4">
        <h1 className="text-3xl font-bold tracking-tight">{STORE_NAME}</h1>
        <p className="text-white/70 text-sm mt-2">
          Korean ramen, bingsu &amp; more — Zamboanga City
        </p>
      </header>

      <main className="flex-1 max-w-md mx-auto w-full px-4 py-8 space-y-10">
        {/* Social Links */}
        <section className="space-y-3">
          <h2 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Follow Us
          </h2>
          <div className="space-y-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 w-full py-3.5 rounded-full text-white font-semibold text-base transition-all ${s.color}`}
              >
                {s.icon}
                {s.name}
              </a>
            ))}
          </div>
        </section>

        {/* Photo Upload */}
        <section className="space-y-3">
          <h2 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Share Your Photos
          </h2>
          <p className="text-center text-sm text-gray-500 leading-relaxed">
            We&apos;d love a copy of your photos! As a small business, it means
            the world when you share your memories with us — we may feature them
            on our socials to help others discover KRAVE too. Thank you!
          </p>
          <PhotoUpload />
        </section>

        {/* Feedback */}
        <section className="space-y-3">
          <h2 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Questions &amp; Suggestions
          </h2>
          <p className="text-center text-sm text-gray-400">
            Got feedback? We&apos;d love to hear from you.
          </p>
          <textarea
            placeholder="Type your message..."
            value={feedback}
            onChange={(e) => {
              setFeedback(e.target.value);
              setFeedbackSent(false);
            }}
            rows={3}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sakura-light focus:border-sakura resize-none"
          />
          <button
            onClick={handleSendFeedback}
            disabled={!feedback.trim()}
            className="w-full bg-sakura text-white font-semibold py-3 rounded-full text-sm hover:bg-sakura-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Send via Messenger
          </button>
          {feedbackSent && (
            <p className="text-xs text-green-600 text-center">
              Thanks for your feedback!
            </p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sakura-50 border-t border-sakura-light py-4 text-center text-xs text-gray-400">
        <span>{STORE_NAME}</span>
      </footer>
    </div>
  );
}
